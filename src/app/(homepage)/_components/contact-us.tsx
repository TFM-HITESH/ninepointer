import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
const ContactUs = () => {
  const email1 = "tharunravuru19844@gmail.com";
  const email2 = "hitesh.shivkumar2022@vitstudent.ac.in";
  return (
    <div
      key="1"
      className="flex justify-center items-center py-12 w-full bg-white"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#d7cac1] to-[#ececec] p-8 mt-10 shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out rounded-lg max-w-2xl w-3/4">
        <div className="grid gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Have Questions?</h2>
            <p className="text-gray-600 mb-2">Feel free to reach out to us!</p>
          </div>
          <div className="text-center">
            <Link href={`mailto:${email}`}>
              <Button className="bg-gradient-to-b from-red-500 to-red-600 hover:-translate-y-[5px] hover:scale-105 transition-transform shadow-sm">
                Talk to Us <MoveRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
