export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">ABC School</h3>
          <p className="text-gray-400">Empowering students to achieve excellence in academics and life.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Programs</a></li>
            <li><a href="#" className="hover:text-white transition">Admissions</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p>Email: info@abcschool.com</p>
          <p>Phone: +880 1234 567 890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition">FB</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500">
        &copy; 2026 ABC School. All Rights Reserved.
      </div>
    </footer>
  );
}
