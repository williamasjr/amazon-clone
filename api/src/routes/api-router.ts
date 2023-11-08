import { Router } from "express";
import { Request, Response } from "express";
import axios from "axios";
import cheerio from "cheerio";

const apiRouter = Router();

apiRouter.get("/api", async (req: Request, res: Response) => {
  const keyword = req.query.keyword as string;

  // if does not pass an keyword on the path returns error.
  if (!keyword) {
    res.status(400).json({ error: "Keyword is required." });
    return;
  }

  // try fetch keyword on amazon

  try {
    const searchUrl = `https://www.amazon.com/s?k=${keyword}`;
    const response = await axios.get(searchUrl);
    const $ = cheerio.load(response.data);

    // create empty array for filter products
    const products: {
      title: string;
      rating: string;
      reviewCount: string;
      imageUrl: string | undefined;
    }[] = [];

    // use cheerio to find products elements

    $(".s-result-item").each((index, element) => {
      const title = $(element).find("span.a-text-normal").text();
      const rating = $(element).find(".a-icon-star-small").text();
      const reviewCount = $(element).find("span.a-size-base").text();
      const imageUrl = $(element).find("img.s-image").attr("src");

      // save elements products on array

      products.push({
        title,
        rating,
        reviewCount,
        imageUrl,
      });
    });

    // send products in json file

    res.status(200).json({ products });
  } catch (error: any) {
    console.error("Cannot find products:", error.message);
    res.status(500).json({ error: "Internal error." });
  }
});

export default apiRouter;
