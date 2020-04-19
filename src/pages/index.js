import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Header from "../components/header"
import Footer from "../components/Footer"


const IndexPage = () => (
  <Layout>
    <SEO title="BlogPost" />
    <div className="BodyLayout">
      <Header />
      <div className="Cards"> 
        <Card 
          image={require('../images/wallpaper4.jpg')}
          tags= "#Updates"
          title="GraphQL CLI is back! Your Swiss Army Knife for the GraphQL ecosystem"
          text="The main target of the GraphQL CLI is to provide a default entry point for the community to use proven techniques for building and deploying GraphQL."
          avatar={require('../images/wallpaper4.jpg')}
          name="Idan Am Shalem"
          date="Oct 30, 2020 • 6 min read"
        />
        <Card 
          image={require('../images/wallpaper2.jpg')}
          tags= "#Updates"
          title="GraphQL CLI is back! Your Swiss Army Knife for the GraphQL ecosystem"
          text="The main target of the GraphQL CLI is to provide a default entry point for the community to use proven techniques for building and deploying GraphQL."
          avatar={require('../images/wallpaper4.jpg')}
          name="Idan Am Shalem"
          date="Oct 30, 2020 • 6 min read"
        />
        <Card 
          image={require('../images/wallpaper3.jpg')}
          tags= "#Updates"
          title="GraphQL CLI is back! Your Swiss Army Knife for the GraphQL ecosystem"
          text="The main target of the GraphQL CLI is to provide a default entry point for the community to use proven techniques for building and deploying GraphQL."
          avatar={require('../images/wallpaper4.jpg')}
          name="Idan Am Shalem"
          date="Oct 30, 2020 • 6 min read"
        />
        <Card 
          image={require('../images/wallpaper.jpg')}
          tags= "#Updates"
          title="GraphQL CLI is back! Your Swiss Army Knife for the GraphQL ecosystem"
          text="The main target of the GraphQL CLI is to provide a default entry point for the community to use proven techniques for building and deploying GraphQL."
          avatar={require('../images/wallpaper4.jpg')}
          name="Idan Am Shalem"
          date="Oct 30, 2020 • 6 min read"
        />
        <Card 
          image={require('../images/wallpaper3.jpg')}
          tags= "#Updates"
          title="GraphQL CLI is back! Your Swiss Army Knife for the GraphQL ecosystem"
          text="The main target of the GraphQL CLI is to provide a default entry point for the community to use proven techniques for building and deploying GraphQL."
          avatar={require('../images/wallpaper4.jpg')}
          name="Idan Am Shalem"
          date="Oct 30, 2020 • 6 min read"
        />
        <Card 
          image={require('../images/wallpaper2.jpg')}
          tags= "#Updates"
          title="GraphQL CLI is back! Your Swiss Army Knife for the GraphQL ecosystem"
          text="The main target of the GraphQL CLI is to provide a default entry point for the community to use proven techniques for building and deploying GraphQL."
          avatar={require('../images/wallpaper4.jpg')}
          name="Idan Am Shalem"
          date="Oct 30, 2020 • 6 min read"
        />
      </div>   
    </div>
    <Footer
          footerlogo = {require('../images/Footerlogo.svg')}
       />
  </Layout>
)

export default IndexPage
