import { Phone, MessageCircle, Mail, MapPin, Navigation2 } from "lucide-react"

export default function ContactHelpline() {
  return (
    <div className="bg-white py-16">
      
      {/* Main Container */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Admission Helpline */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission Helpline</h2>

            {/* Phone */}
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                  <Phone className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone Number</p>
                <div className="flex flex-col gap-1 mt-1">
                  <p style={{ color: "#6bc533" }} className="text-sm font-medium">
                    18002124454 (Toll Free)
                  </p>
                  <p style={{ color: "#6bc533" }} className="text-sm font-medium">
                    +91 7617774486
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                <p style={{ color: "#6bc533" }} className="text-sm font-medium mt-1">
                  +91 7617774454
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                  <Mail className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Email Address</p>
                <a
                  href="mailto:admissions@onlineuu.in"
                  style={{ color: "#6bc533" }}
                  className="text-sm font-medium mt-1 hover:underline"
                >
                  admissions@onlineuu.in
                </a>
              </div>
            </div>
          </div>

          {/* Academic Helpline */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Helpline</h2>

            {/* Phone */}
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                  <Phone className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone Number</p>
                <p style={{ color: "#6bc533" }} className="text-sm font-medium mt-1">
                  08071176059
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                  <Mail className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Email Address</p>
                <a
                  href="mailto:helpdesk@onlineuu.in"
                  style={{ color: "#6bc533" }}
                  className="text-sm font-medium mt-1 hover:underline"
                >
                  helpdesk@onlineuu.in
                </a>
                <p className="text-xs text-gray-600 mt-1">(For all academic related queries and support)</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Address</h2>

            {/* Location */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Uttaranchal University,</p>
                <p className="text-sm text-gray-700">Premnagar, Dehradun, Uttarakhand-248007, INDIA</p>
              </div>
            </div>

            {/* Get Directions Button */}
            <button
              style={{ backgroundColor: "#6bc533" }}
              className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
            >
              <span>Get Directions</span>
              <Navigation2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
