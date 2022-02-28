import Head from 'next/head'

export default function Home (){
  return(
    <div>
      <Head>
        <title>Hori-Hi Home</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>

      <div className="global_container">
        glabal container 
      </div>

      <style jsx>
        {`
          .global_container{
            background:red;
          }
        `}
      </style>
    </div>
  )
}
