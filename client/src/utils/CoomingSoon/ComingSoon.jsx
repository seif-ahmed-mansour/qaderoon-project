import { useState, useEffect } from 'react';
import "./ComingSoon.css"
const ComingSoon = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[91vh] md:h-[88vh] bg-gradient-to-br from-red-500 to-black/85 flex items-center justify-center p-4">
            {loading ? (
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-white font-semibold">جاري التحميل...</p>
                </div>
            ) : (

                <div className="text-center animate-fade-in " dir='ltr'>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            تحت التطوير
                    </h1>

                    <div className="space-y-4">
                        <p className="text-xl text-white opacity-90">
                                قريبًا.. انتظرونا
                        </p>

                        <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-xs mx-auto">
                            <div
                                className="bg-primary h-2.5 rounded-full animate-progress"
                                style={{ width: '75%' }}
                            ></div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default ComingSoon;