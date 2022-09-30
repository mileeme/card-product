import {useState, useEffect} from "react";
import {dataCourse} from "./dataCourse";
import CardList from "../Card/CardList";
import Card from "../Card/Card";


export default function SearchResults() {
  const [courses, setCourses] = useState([]);

  useEffect(() => setCourses(dataCourse), [])

  return (
    <CardList data={courses} />
  )
}