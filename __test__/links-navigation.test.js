/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../student-code/index.html"),
  "utf8"
);

describe("Lesson 4: Links and Navigation - Classwork Assignment", () => {
  let document;

  beforeEach(() => {
    document = new DOMParser().parseFromString(html, "text/html");
  });

  test("Header navigation links exist with correct hrefs", () => {
    const header = document.querySelector("header");
    expect(header).not.toBeNull();

    const links = header.querySelectorAll("nav a");
    const hrefs = Array.from(links).map((a) => a.getAttribute("href"));

    expect(hrefs).toContain("#about");
    expect(hrefs).toContain("#routine");
    expect(hrefs).toContain("#hobbies");
  });

  test("Anchor points exist for bookmarks", () => {
    const aboutSection = document.querySelector("#about");
    const routineSection = document.querySelector("#routine");
    const hobbiesDiv = document.querySelector("#hobbies");

    expect(aboutSection).not.toBeNull();
    expect(routineSection).not.toBeNull();
    expect(hobbiesDiv).not.toBeNull();
  });

  test("External link exists and opens in a new tab", () => {
    const externalLink = document.querySelector(
      'a[href="https://www.w3schools.com/html/"]'
    );

    expect(externalLink).not.toBeNull();
    expect(externalLink.getAttribute("target")).toBe("_blank");
  });

  test('Contains a "Back to Top" link with href="#top"', () => {
    const backToTopLink = document.querySelector('a[href="#top"]');
    expect(backToTopLink).not.toBeNull();
  });

  test("Includes a closing tag for all anchor elements", () => {
    const regex = /<a\s+[^>]*>(.*?)<\/a>/gi;
    const matches = html.match(regex) || [];
    const allAnchorsClosed = matches.every((match) => match.includes("</a>"));
    expect(allAnchorsClosed).toBe(true);
  });
});
