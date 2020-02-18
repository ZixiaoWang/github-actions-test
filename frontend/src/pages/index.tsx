import 'reflect-metadata';
import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <h1>Server Side Renderring</h1>
                    </div>
                    <p>
                        It works
                    </p>
                    <p>
                        <Link href="/commentDetail" >
                            <a>Comment Detail</a>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Index;