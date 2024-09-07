import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import axios from "axios"

const data= axios.post('https://jsonplaceholder.typicode.com/todos')
console.log(data)

export default function Home() {
  return <div>hello</div>;
}
