import React from 'react'
import ArticleComponent from "../../../components/ArticleComponent/ArticleComponent"
export default function index(props) {
    console.log(props)
    const {data} = props
    return (
        <div>
            <ArticleComponent data={data} />
        </div>
    )
}

export async function getStaticPaths() {
    return {
      // Only `/posts/1` and `/posts/2` are generated at build time
      paths: [{ params: { type:"exams",article: '0' } }, { params: { type:"exams", article: '1' } }],
      // Enable statically generating additional pages
      // For example: `/posts/3`
      fallback: true,
    }
  }

export async function getStaticProps ({params}) {
    const request = await fetch(`https://jsonplaceholder.typicode.com/users/${params.article}`)
    const json = await request.json()
  
    return {
      props: {
        data: json
      }
    }
  }