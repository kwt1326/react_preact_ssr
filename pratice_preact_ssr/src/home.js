import { h } from "preact";
import { Link } from 'preact-router';

export const Home = ({ url }) => (
    <div>
      Home : {url}
      <Link href='/intro'><h3>INTRODUCE PAGE</h3></Link>
    </div>
);