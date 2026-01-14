import profile from '../images/profile.png';

function Home() {
    return (
        
        <div className="flex h-screen">
            <style>{`body { overflow: hidden; }`}</style>
           
            {/* Left Side */}
            <div className="w-1/2 bg-white flex items-center justify-center">
                <img
                    src={profile}
                    alt="Profile"
                    className="h-[80%] max-h-[90vh] object-cover rounded-lg"
                    style={{ maxWidth: '100%', height: '90%' }}
                />
            </div>
             {/* Right Side */}
            <div className="w-1/2 bg-black flex flex-col justify-center pl-24">
                <div>
                    <p className="text-xl text-white mb-2 font-medium">Hi, I am</p>
                    <h1 className="text-5xl text-white font-bold mb-2">Medina Bunjaku</h1>
                    <p className="text-gray-400 font-semibold mb-8">“Director of Culture, Youth and Sports”</p>
                    <div className="flex space-x-4">
                        <a href="mailto:someone@example.com" className="bg-white shadow p-2 rounded hover:bg-gray-200 transition">
                            <span className="sr-only">Email</span>
                            {/* ... */}
                        </a>
                        <a href="https://facebook.com/" className="bg-white shadow p-2 rounded hover:bg-gray-200 transition">
                            <span className="sr-only">FaceBook</span>
                            {/* ... */}
                        </a>
                        <a href="https://instagram.com/" className="bg-white shadow p-2 rounded hover:bg-gray-200 transition">
                            <span className="sr-only">Instagram</span>
                            {/* ... */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;