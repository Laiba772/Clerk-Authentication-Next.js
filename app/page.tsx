
export default function Page() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Awesome App!</h1>
      <p className="text-xl mb-8">Please sign in to continue and explore more features.</p>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">Sign In to Your Account</h2>
      </div>

      <footer className="mt-16 text-center text-sm">
        <p>Clerk is an authentication and user management platform that provides simple and secure login flows for modern web applications.</p>
        <p className="mt-2">To learn more about Clerk, visit 
        <a href="https://clerk.dev" className="text-blue-400">Clerk&apos;s Documentation</a>.</p>
      </footer>
    </div>
  );
}
