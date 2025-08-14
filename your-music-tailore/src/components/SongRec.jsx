import Markdown from "react-markdown"

export default function SongRec(props){
    return(
        <div className="flex justify-center w-full px-4">
            <div className="text-[16px] w-[60vw] mt-8 mb-20 backdrop-blur-sm bg-black/40 rounded-2xl border border-yellow-400/50 shadow-2xl shadow-yellow-500/20 relative overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-yellow-500/80 to-orange-500/80 backdrop-blur-md">
                    <h2 className="font-bold text-[18px] text-white flex items-center gap-2">
                        🎵 Your Personalized Song Recommendation
                    </h2>
                </div>

                <div className="p-6 text-white prose prose-invert max-w-none"
                        components={{
                            h1: ({children}) => (
                                <h1 className="text-2xl font-bold text-yellow-300 mb-4 border-b border-yellow-400/30 pb-2">
                                    {children}
                                </h1>
                            ),
                            h2: ({children}) => (
                                <h2 className="text-xl font-bold text-orange-300 mb-3 mt-6">
                                    {children}
                                </h2>
                            ),
                            h3: ({children}) => (
                                <h3 className="text-lg font-semibold text-yellow-200 mb-2 mt-4">
                                    {children}
                                </h3>
                            ),
                            p: ({children}) => (
                                <p className="mb-4 text-gray-100 leading-relaxed">
                                    {children}
                                </p>
                            ),
                            ul: ({children}) => (
                                <ul className="mb-4 space-y-2 text-gray-100">
                                    {children}
                                </ul>
                            ),
                            li: ({children}) => (
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">•</span>
                                    <span>{children}</span>
                                </li>
                            ),
                            strong: ({children}) => (
                                <strong className="text-yellow-300 font-semibold">
                                    {children}
                                </strong>
                            ),
                            em: ({children}) => (
                                <em className="text-orange-300 italic">
                                    {children}
                                </em>
                            ),
                            blockquote: ({children}) => (
                                <blockquote className="border-l-4 border-yellow-400/50 pl-4 py-2 my-4 bg-black/20 rounded-r-lg italic text-yellow-100">
                                    {children}
                                </blockquote>
                            ),
                            code: ({children}) => (
                                <code className="bg-black/50 text-yellow-300 px-2 py-1 rounded text-sm">
                                    {children}
                                </code>
                            ),
                            pre: ({children}) => (
                                <pre className="bg-black/50 text-yellow-300 p-4 rounded-lg overflow-x-auto my-4 border border-yellow-400/30">
                                    {children}
                                </pre>
                            )
                        }}>
                    <Markdown>
                        {props.song}
                    </Markdown>
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-500/10 rounded-full blur-xl"></div>
            </div>
        </div>
    )
}