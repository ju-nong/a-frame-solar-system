import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content="#0f0f0f"></meta>
                <meta
                    name="description"
                    content="a-frame으로 구현한 태양계"
                ></meta>
                <meta
                    name="keywords"
                    content="a-frame, solar-system, sun, earth, 360, 3D"
                ></meta>
                <meta name="author" content="이준용"></meta>
                <meta content="3D-태양계" property="og:title"></meta>
                <meta content="/ari.jpg" property="og:image"></meta>
                <meta content="website" property="og:type"></meta>
                <meta
                    content="a-frame-solar-system.vercel.app"
                    property="og:site_name"
                ></meta>
                <meta
                    content="https://a-frame-solar-system.vercel.app/"
                    property="og:url"
                ></meta>
                <link rel="icon" href="/favicon.png"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
