'use client';

import { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { FeeDetails as FeeDetailsType } from '@/lib/course-configs';

interface FeeDetailsProps {
  feeDetails: FeeDetailsType;
}

export default function FeeDetails({ feeDetails }: FeeDetailsProps) {
  const [activeTab, setActiveTab] = useState<'national' | 'international'>('national');

  const semesterData = activeTab === 'national' ? feeDetails.national.semesterData : feeDetails.international.semesterData;
  const yearData = activeTab === 'national' ? feeDetails.national.yearData : feeDetails.international.yearData;
  const totalSemesterFee = activeTab === 'national' ? feeDetails.national.totalSemesterFee : feeDetails.international.totalSemesterFee;
  const totalYearFee = activeTab === 'national' ? feeDetails.national.totalYearFee : feeDetails.international.totalYearFee;
  const eligibility = activeTab === 'national' ? feeDetails.nationalEligibility : feeDetails.internationalEligibility;

  return (
    <div className="min-h-screen bg-white p-8 lg:p-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-800 text-2xl font-bold ">ELIGIBILITY &</h1>
        <h2 className="text-[#6bc533] text-5xl font-bold mb-8">FEE DETAILS</h2>

        {/* Tabs and Download Button */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab('national')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'national'
                  ? 'bg-[#6bc533] text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              National Students
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'international'
                  ? 'bg-[#6bc533] text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              International Students
            </button>
          </div>
          <button className="flex items-center gap-2 bg-[#6bc533] hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all">
            Download
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Tables */}
        <div className="lg:col-span-2 space-y-8">
          {/* Semester Wise Payments */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">SEMESTER WISE PAYMENTS</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#453CD5] text-white">
                    <th className="px-6 py-4 text-left font-semibold">No. of Semesters</th>
                    <th className="px-6 py-4 text-left font-semibold">Fee Amount in {activeTab === 'national' ? 'INR' : 'USD'}</th>
                  </tr>
                </thead>
                <tbody>
                  {semesterData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-gray-700">{row.semester}</td>
                      <td className="px-6 py-4 text-gray-700">{row.fee}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-800">Total Fee</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">{totalSemesterFee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Year Wise Payments */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">YEAR WISE PAYMENTS</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#453CD5] text-white">
                    <th className="px-6 py-4 text-left font-semibold">No. of Years</th>
                    <th className="px-6 py-4 text-left font-semibold">Fee Amount in {activeTab === 'national' ? 'INR' : 'USD'}</th>
                  </tr>
                </thead>
                <tbody>
                  {yearData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-gray-700">{row.year}</td>
                      <td className="px-6 py-4 text-gray-700">{row.fee}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-800">Total Fee</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">{totalYearFee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Info Sections */}
        <div className="space-y-6">
          {/* Eligibility Section */}
          <div>
            <div className="bg-[#453CD5] text-white px-6 py-3 font-bold text-lg mb-4 inline-block">
              ELIGIBILITY
            </div>
            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="text-[#6bc533] flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Mode Section */}
          <div>
            <div className="bg-[#6bc533] text-white px-6 py-3 font-bold text-lg mb-4 inline-block">
              PAYMENT MODE
            </div>
            <div className="space-y-4">
              {feeDetails.paymentModes.map((mode, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="text-[#6bc533] flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {mode}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
