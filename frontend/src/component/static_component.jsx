import {Space} from "antd";

export default function NewHomePage() {
    return <>{booster} {statistic} {pricing()}</>;
}

export const booster = <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">众智平台——外包的新选择
            <br className="hidden sm:block"/>Selfies Wayfarers
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
                <div
                    className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar
                        toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
                        try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
                <div
                    className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar
                        toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
                        try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
                <div
                    className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar
                        toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
                        try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>;

export const statistic = <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">因为专业所以值得信赖</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn
                asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man
                bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg t="1715655535192" className="icon inline-block w-12 h-12 mb-3" viewBox="0 0 1024 1024"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1990">
                        <path
                            d="M956.928 662.656a181.952 181.952 0 0 0-159.808-94.336l-134.912-0.64a175.488 175.488 0 0 0-127.808-55.04H455.168c-56.192-46.336-102.4-48-143.168-48l-59.904-0.256v-40.448a32 32 0 0 0-32-32H96.128a32 32 0 0 0-32 32v408a32 32 0 0 0 32 32h123.968a32 32 0 0 0 32-32v-30.208c63.68 26.24 175.104 62.912 299.072 62.912 79.232 0 279.232-16 404.288-182.272a18.176 18.176 0 0 0 1.472-19.712z m-760.832 145.28H120.128V447.936h75.968v360z m355.072 0.128c-131.008 0.192-259.008-48.128-299.072-67.84V519.808c19.712 0.128 70.464 0.128 72.064 0.128 55.552 0 92.992 30.08 106.432 43.392a15.936 15.936 0 0 0 11.392 4.544c29.568-0.384 92.16 0.448 92.16 0.448h0.192c61.76-0.448 101.76 39.552 115.456 87.04H406.4a8 8 0 0 0-8 8.064v40c0 4.416 3.584 8 8 8h288a15.744 15.744 0 0 0 16-16c-0.768-18.304-4.48-52.096-12.48-72.192l98.88 0.512h0.32c47.68 0.128 78.592 25.6 91.904 39.552 2.944 3.008 3.008 7.744 0.256 10.88-98.176 110.464-254.464 133.76-338.112 133.824z"
                            p-id="1991" fill="#5b66f1"></path>
                        <path
                            d="M856.128 320.64a88 88 0 1 1 0 176 88 88 0 0 1 0-176z m0 56a32 32 0 1 0 0 64 32 32 0 0 0 0-64zM512.128 160.64a120 120 0 1 1 0 240 120 120 0 0 1 0-240z m0 56a64.064 64.064 0 0 0 0 128 64 64 0 1 0 0-128z"
                            p-id="1992" fill="#5b66f1"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                    <p className="leading-relaxed">成交量</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                    <p className="leading-relaxed">众包者</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg t="1715652094600" className="icon inline-block w-12 h-12 mb-3" viewBox="0 0 1024 1024"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="936">
                        <path
                            d="M841.856 928.192H192.64a69.248 69.248 0 0 1-69.312-68.992 33.28 33.28 0 0 1 66.56 0c0 1.408 1.28 2.688 2.752 2.688h649.28c1.408 0 2.688-1.28 2.688-2.688a33.28 33.28 0 0 1 66.56 0c0 38.08-31.04 68.992-69.248 68.992zM590.08 313.6H426.88a33.28 33.28 0 1 1 0-66.368h163.2a33.28 33.28 0 1 1 0 66.368z"
                            fill="#5b66f1" p-id="937"></path>
                        <path
                            d="M147.328 337.856a33.216 33.216 0 0 1-27.136-52.416l170.24-167.296a33.344 33.344 0 0 1 53.568-1.024L452.48 257.536a33.088 33.088 0 0 1-6.08 46.528 33.344 33.344 0 0 1-46.72-6.08L318.656 193.152 174.464 323.84a33.28 33.28 0 0 1-27.136 13.952z m734.4-5.248a33.28 33.28 0 0 1-26.688-13.376l-154.624-132.48-83.712 110.976a33.408 33.408 0 0 1-46.592 6.592 33.088 33.088 0 0 1-6.656-46.464l110.464-146.368a33.344 33.344 0 0 1 26.624-13.248h0.064c10.496 0 20.352 4.928 26.624 13.312l181.184 168.064a33.088 33.088 0 0 1-26.688 52.992zM167.104 762.624c-56.32 0-102.144-45.632-102.144-101.76V519.36c0-56.128 45.824-101.76 102.144-101.76 56.32 0 102.144 45.632 102.144 101.76v141.504c0 56.128-45.824 101.76-102.144 101.76z m0-278.656a35.456 35.456 0 0 0-35.52 35.328v141.568a35.52 35.52 0 0 0 71.04 0V519.36a35.52 35.52 0 0 0-35.52-35.392z m682.752 278.656c-56.32 0-102.08-45.632-102.08-101.76V519.36c0-56.128 45.824-101.76 102.08-101.76 56.32 0 102.144 45.632 102.144 101.76v141.504c0 56.128-45.824 101.76-102.144 101.76z m0-278.656a35.456 35.456 0 0 0-35.52 35.328v141.568a35.52 35.52 0 0 0 71.04 0V519.36a35.52 35.52 0 0 0-35.52-35.392z"
                            fill="#5b66f1" p-id="938"></path>
                        <path
                            d="M400.256 465.92a33.28 33.28 0 0 1 33.28 33.088v97.28a33.28 33.28 0 0 1-66.56 0v-97.28a33.28 33.28 0 0 1 33.28-33.152z m238.72-4.48a33.28 33.28 0 0 1 33.28 33.152v97.28a33.28 33.28 0 0 1-66.56 0v-97.28a33.28 33.28 0 0 1 33.28-33.152z"
                            fill="#5b66f1" p-id="939"></path>
                        <path
                            d="M524.608 797.952H380.16c-80.384 0-165.824-57.28-169.472-59.712a33.088 33.088 0 0 1-8.768-46.08 33.344 33.344 0 0 1 46.272-8.768c1.088 0.704 72.384 48.256 131.968 48.256h144.32a33.28 33.28 0 1 1 0 66.304zM148.16 393.92a34.624 34.624 0 0 1-34.688-34.688v-48.512a34.624 34.624 0 1 1 69.312 0v48.512a34.688 34.688 0 0 1-34.624 34.688z m734.592-4.608a34.624 34.624 0 0 1-34.688-34.688v-48.512a34.624 34.624 0 1 1 69.312 0v48.512a34.688 34.688 0 0 1-34.624 34.688zM157.376 906.752a34.624 34.624 0 0 1-34.624-34.688v-48.512a34.624 34.624 0 1 1 69.248 0v48.512c0 19.2-15.488 34.688-34.56 34.688z m720.704-4.672a34.624 34.624 0 0 1-34.624-34.56v-48.576a34.624 34.624 0 1 1 69.312 0v48.512c0 19.2-15.552 34.624-34.688 34.624z"
                            fill="#5b66f1" p-id="940"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">100%</h2>
                    <p className="leading-relaxed">客服服务</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">100%</h2>
                    <p className="leading-relaxed">安全保障</p>
                </div>
            </div>
        </div>
    </div>
</section>;
const pricing = () => {
    return <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div
                        className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span
                            className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">基础版</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>$38</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
                        </p>
                        <button
                            className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean
                            shorts.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div
                        className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">标准版</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>$56</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
                        </p>
                        <button
                            className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean
                            shorts.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div
                        className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">高级版</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>$72</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
                        </p>
                        <button
                            className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean
                            shorts.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export const TESTIMONIAL = <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">客户案例</h1>
        <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4"
                         viewBox="0 0 975.036 975.036">
                        <path
                            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
                        neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.</p>
                    <a class="inline-flex items-center">
                        <img alt="testimonial" src="https://dummyimage.com/106x106"
                             class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span class="text-gray-500 text-sm">UI DEVELOPER</span>
            </span></a>
                </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4"
                         viewBox="0 0 975.036 975.036">
                        <path
                            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
                        neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.</p>
                    <a class="inline-flex items-center">
                        <img alt="testimonial" src="https://dummyimage.com/107x107"
                             class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Alper Kamu</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


export function Team({members}) {
    console.log(members)
    return <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">我们的团队</h1>
            <p className="max-w-2xl text-center dark:text-gray-600">
                At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic
                explicabo doloribus magnam neque, exercitationem eius sunt!
            </p>
            <div className="flex flex-row flex-wrap-reverse justify-center">
                {members?.map((member, index) => (
                    <div key={index} className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt={member?.nickname}
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={member?.cover}
                        />
                        <p className="text-xl font-semibold leading-tight">{member?.nickname}</p>
                        {/*<p className="dark:text-gray-600">{member.role}</p>*/}
                    </div>
                ))}
            </div>
        </div>
    </section>;

    // return <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
    //     <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
    //         <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">我们的团队</h1>
    //         <p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi
    //             saepe
    //             rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius
    //             sunt!</p>
    //         <div className="flex flex-row flex-wrap-reverse justify-center">
    //             <div className="flex flex-col justify-center m-8 text-center">
    //                 <img alt=""
    //                      className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
    //                      src="/male1.png"/>
    //                 <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
    //                 <p className="dark:text-gray-600">Visual Designer</p>
    //             </div>
    //             <div className="flex flex-col justify-center m-8 text-center">
    //                 <img alt=""
    //                      className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
    //                      src="https://source.unsplash.com/100x100/?portrait?1"/>
    //                 <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
    //                 <p className="dark:text-gray-600">Visual Designer</p>
    //             </div>
    //             <div className="flex flex-col justify-center m-8 text-center">
    //                 <img alt=""
    //                      className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
    //                      src="https://source.unsplash.com/100x100/?portrait?2"/>
    //                 <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
    //                 <p className="dark:text-gray-600">Visual Designer</p>
    //             </div>
    //             <div className="flex flex-col justify-center m-8 text-center">
    //                 <img alt=""
    //                      className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
    //                      src="https://source.unsplash.com/100x100/?portrait?3"/>
    //                 <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
    //                 <p className="dark:text-gray-600">Visual Designer</p>
    //             </div>
    //             <div className="flex flex-col justify-center m-8 text-center">
    //                 <img alt=""
    //                      className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
    //                      src="https://source.unsplash.com/100x100/?portrait?4"/>
    //                 <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
    //                 <p className="dark:text-gray-600">Visual Designer</p>
    //             </div>
    //             <div className="flex flex-col justify-center m-8 text-center">
    //                 <img alt=""
    //                      className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
    //                      src="https://source.unsplash.com/100x100/?portrait?5"/>
    //                 <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
    //                 <p className="dark:text-gray-600">Visual Designer</p>
    //             </div>
    //         </div>
    //     </div>
    // </section>
}


export const start = <section className="dark:bg-gray-100 dark:text-gray-800">
    <div
        className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="/Business.svg" alt=""
                 className="object-contain"/>
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">众智—<br></br>
                <span className="dark:text-violet-600">新时代</span><br/>外包平台
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">{" 打破行业壁垒，聚焦价值转化\r"}<Space size={"large"}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </Space>
                <br className="hidden md:inline lg:hidden"/>{`加入众智众包平台, 连接您的创意, 释放无限可能！`}
            </p>
            {/*<div*/}
            {/*    className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">*/}
            {/*    <a rel="noopener noreferrer" href="#"*/}
            {/*       className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">点击发布你的需求</a>*/}
            {/*</div>*/}
        </div>
    </div>
</section>;