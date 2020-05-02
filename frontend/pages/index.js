// pages you need to route to and from go in the pages dir
// next.js takes care of importing react, so no import needed here 😍
import Items from '../components/Items';

import Link from 'next/link'; // <- next.js way of routing without refreshing the page
const Home = props => (
  <div>
    <Items />
  </div>
);
export default Home;
