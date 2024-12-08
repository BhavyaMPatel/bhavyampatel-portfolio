import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Certification() {
    return (
        <>  
            <Helmet>   
                <title>BhavyaMPatel | Certification Page</title>
                <meta name="description" content="AWS (Amazon Web Service) Certified Solutions Architect Associate AWS-SAA"/>
                <link rel="canonical" href="/certificates" />
            </Helmet>

            <div className="mx-auto max-w-7xl lg:px-8 mt-20">
                <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <div className="max-w-2xl">
                            <h1 className="text-3xl tracking-tight text-zinc-950 text-balance sm:text-4xl font-thin mb-5">Certification</h1>

                            <Link target="_blank" to="https://www.credly.com/badges/4f76550c-46bd-4dd5-980f-939fbd7ad7d9/public_url" className="mt-6 text-lg font-thin">AWS Certified Solutions Architect – Associate</Link>
                            <div className="flex gap-6 mb-4">Amazon</div>

                            <Link target="_blank" to="https://drive.google.com/file/d/1ouz7ffRiTcXjOMcKcO7MqxB-UBRDtx2i/view" className="mt-5 text-lg font-thin">Google Cloud Computing Foundation</Link>
                            <div className="flex gap-6 mb-4">Google</div>
                            
                            <Link target="_blank" to="https://www.linkedin.com/in/bhavyapatel/" className="mt-5 text-lg font-thin">More ..</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
