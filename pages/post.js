import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import React,{Component} from 'react'

export default function Post (){
    
    return(


        <Layout home>
            <Head>
                <title>{siteTitle}</title>
               
            </Head>

            <section className={utilStyles.heading}>
                <p>Esta es la prueba de los la implementacion del Layout</p>
                <Link href="/">
                <a>Home</a>
                </Link>
            </section>
        </Layout>
    )
}

