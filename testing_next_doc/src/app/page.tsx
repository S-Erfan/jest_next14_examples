import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div>Logo</div>
          <ul>
            <li>
              <Link href={"/jest"}>Shoping</Link>
            </li>
            <li>Categories</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>this is Home</h1>
        </section>
        <section>section2</section>
        <section>section3</section>
      </main>
      <footer>footer</footer>
    </React.Fragment>
  );
}
