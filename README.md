### **Lesson 5: Links and Navigation - Classwork Assignment**

#### **Objective:**

Building on the webpage created in previous lessons, students will add internal, external, and bookmark links to enhance site navigation. This classwork will help students demonstrate their understanding of the `<a>` tag, relative vs. absolute paths, and bookmarks within a webpage.

---

### **Step-by-Step Guide:**

1. **Open Your Existing HTML File**:

   - Open the index.html file you created in the unit02-cw folder.
   - You will now enhance this file by adding different types of links and bookmarks.

2. **Add Navigation Links in the Header**:

   - Inside the `<header>` tag, add navigation links that allow users to jump to different sections of your page. These will be **internal links** (bookmarks):
     - Add links to "About Me", "My Daily Routine", and "My Hobbies" using the `<a>` tag and `href` attribute with bookmarks. You will need to create **anchor points** using `id` attributes to scroll to the relevant sections:
     ```html
     <header>
       <h1>Logo</h1>
       <nav>
         <a href="#about">About Me</a> |
         <a href="#routine">My Daily Routine</a> |
         <a href="#hobbies">My Hobbies</a>
       </nav>
     </header>
     ```

3. **Add Anchor Points for Bookmarks**:

   - In the main content, update the relevant sections with `id` attributes to create anchor points for the internal links. This will allow the page to scroll to the correct section when users click the navigation links:

     ```html
     <main>
       <section id="about">
         <h1>Welcome to My First Webpage</h1>

         <h2>About Me</h2>
         <p>
           My name is [Your Name], and I am learning how to create websites
           using HTML.
         </p>
       </section>

       <section id="routine">
         <h3>My Daily Routine</h3>
         <ol>
           <li>Wake up and have breakfast</li>
           <li>Check my emails and messages</li>
           <li>Work on my web development projects</li>
           <li>Go for a walk in the afternoon</li>
           <li>Read or play video games in the evening</li>
         </ol>
       </section>

       <div id="hobbies">
         <h3>My Hobbies</h3>
         <ul>
           <li>Reading books</li>
           <li>Coding</li>
           <li>Playing video games</li>
           <li>Hiking</li>
         </ul>
       </div>
     </main>
     ```

4. **Add an External Link**:

   - Inside the "Related Articles" section within the `<aside>`, add an external link to a resource. For example, you can add a link to an external HTML tutorial website:
     ```html
     <aside>
       <h3>Related Articles</h3>
       <ul>
         <li>
           <a href="https://www.w3schools.com/html/" target="_blank"
             >Why Learn HTML?</a
           >
         </li>
         <li><a href="#">CSS for Beginners</a></li>
         <li><a href="#">JavaScript Basics</a></li>
       </ul>
     </aside>
     ```
   - The `target="_blank"` attribute ensures the external link opens in a new tab.

5. **Create a "Back to Top" Bookmark Link**:

   - At the bottom of the **"My Hobbies"** section, add a **bookmark link** to scroll back to the top of the page. This will link back to the top of the page using the `<a href="#top">` tag:
     ```html
     <div id="hobbies">
       <h3>My Hobbies</h3>
       <ul>
         <li>Reading books</li>
         <li>Coding</li>
         <li>Playing video games</li>
         <li>Hiking</li>
       </ul>
       <p><a href="#top">Back to Top</a></p>
     </div>
     ```

6. **Ensure Proper Link Usage**:

   - Verify that the internal links (bookmarks) navigate to the correct sections of the page.
   - Ensure that the external link opens in a new tab when clicked.
   - Test the "Back to Top" link to make sure it scrolls to the top of the page.

7. **Save and Preview Your Webpage**:

   - Save your `index.html` file.
   - Open it in a browser and click on the navigation links, the external link, and the bookmark links to ensure they work as expected.

8. **Submit Your Work**:
   - Once you've confirmed the webpage works as expected, submit the following:
     - The zipped `unit02-cw` folder with the updated `index.html` file.
   - Upload it to the class folder on GitHub or your class submission platform.

---

### **Assessment Criteria**:

1. **Correct Use of Links**:

   - Internal links (bookmarks) correctly navigate to sections of the page using anchor points.
   - External links open in a new tab using the `target="_blank"` attribute.
   - The "Back to Top" link successfully navigates to the top of the page.

2. **Logical Content Navigation**:

   - The navigation links in the header improve user experience by allowing easy navigation between sections.
   - The external link provides additional resources related to the topic.

3. **File Structure and Submission**:
   - The HTML file is well-organized and correctly formatted.
   - The updated file is submitted properly along with the rest of the `unit02-cw` folder.
