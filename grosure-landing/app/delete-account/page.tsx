'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    comments: '',
    confirmedDeletion: false,
    confirmedExport: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmDialog(true);
  };

  const confirmDeletion = async () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowConfirmDialog(false);
    }, 2000);

    // In production, this would be:
    // try {
    //   const response = await fetch('/api/account/delete-request', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       email: formData.email,
    //       reason: formData.reason,
    //       comments: formData.comments,
    //       confirmed: true,
    //     }),
    //   });
    //   const data = await response.json();
    //   if (data.success) {
    //     setIsSubmitted(true);
    //   }
    // } catch (error) {
    //   console.error('Error submitting deletion request:', error);
    // }
  };

  const canSubmit = formData.email && formData.confirmedDeletion && formData.confirmedExport;

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-primary mb-4">
                Account Deletion Request Received
              </h1>
              <p className="text-lg text-secondary mb-6">
                Your account deletion request has been received. You will receive a confirmation email at{' '}
                <strong>{formData.email}</strong> within 24 hours. Your account access has been disabled.
              </p>

              <div className="bg-accent/5 rounded-lg p-6 mb-8 text-left">
                <h2 className="font-semibold text-lg mb-4">Next Steps:</h2>
                <ol className="space-y-2 text-secondary">
                  <li>1. Check your email for confirmation</li>
                  <li>2. Reply to the email if you change your mind (within 24 hours)</li>
                  <li>3. Account and data will be permanently deleted within 30 days</li>
                </ol>
              </div>

              <Link
                href="/"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Delete Your Account</h1>
          <p className="text-lg text-secondary mb-8">
            We're sorry to see you go. If you wish to delete your grosure account and all associated
            data, please read the information below carefully before submitting your request.
          </p>

          {/* What Gets Deleted */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">What Will Be Deleted</h2>
            <p className="text-secondary mb-4">
              When you delete your account, the following data will be permanently removed:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Your user profile and account information',
                'All pantry items and inventory data',
                'All shopping lists and items',
                'All saved and created recipes',
                'All meal plans and schedules',
                'Chat history and AI conversations',
                'User preferences and settings',
                'Any uploaded images or media',
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-red-800">
                    This action is irreversible. Once your account is deleted, you will not be able to
                    recover your data. Please export any important information before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Deletion Timeline</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </div>
                <div>
                  <strong>Immediate:</strong> Account access will be disabled immediately
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </div>
                <div>
                  <strong>Within 24 hours:</strong> Data removed from active databases
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </div>
                <div>
                  <strong>Within 30 days:</strong> Data permanently deleted from all systems
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </div>
                <div>
                  <strong>Within 90 days:</strong> Data removed from backup systems
                </div>
              </div>
            </div>
          </section>

          {/* Before You Go */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Before You Delete Your Account</h2>
            <p className="text-secondary mb-4">Consider these alternatives:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Take a break</h3>
                <p className="text-sm text-secondary mb-4">
                  Just log out and come back later - your data will be waiting
                </p>
                <Link href="/" className="text-accent hover:underline text-sm">
                  Return to App →
                </Link>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Export your data</h3>
                <p className="text-sm text-secondary mb-4">
                  Download your recipes, meal plans, and pantry inventory
                </p>
                <button className="text-accent hover:underline text-sm">
                  Export Data →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Contact support</h3>
                <p className="text-sm text-secondary mb-4">
                  Let us know if there's an issue we can help with
                </p>
                <a href="mailto:support@grosure.ai" className="text-accent hover:underline text-sm">
                  Contact Us →
                </a>
              </div>
            </div>
          </section>

          {/* Deletion Form */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Submit Deletion Request</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your account email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <p className="text-xs text-secondary mt-1">
                  Must match the email associated with your account
                </p>
              </div>

              {/* Reason */}
              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-primary mb-2">
                  Reason for Deletion (Optional)
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select a reason...</option>
                  <option value="no-longer-need">No longer need the app</option>
                  <option value="privacy-concerns">Privacy concerns</option>
                  <option value="found-alternative">Found a better alternative</option>
                  <option value="too-complicated">Too complicated to use</option>
                  <option value="technical-issues">Technical issues</option>
                  <option value="other">Other</option>
                </select>
                <p className="text-xs text-secondary mt-1">
                  Help us improve by sharing why you're leaving
                </p>
              </div>

              {/* Comments */}
              <div>
                <label htmlFor="comments" className="block text-sm font-semibold text-primary mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  placeholder="Any feedback or suggestions?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <p className="text-xs text-secondary mt-1">
                  {formData.comments.length}/500 characters
                </p>
              </div>

              {/* Confirmations */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="confirmedDeletion"
                    name="confirmedDeletion"
                    checked={formData.confirmedDeletion}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent"
                    required
                  />
                  <label htmlFor="confirmedDeletion" className="ml-3 text-sm text-primary">
                    I understand that this action is permanent and all my data will be deleted.{' '}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="confirmedExport"
                    name="confirmedExport"
                    checked={formData.confirmedExport}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent"
                    required
                  />
                  <label htmlFor="confirmedExport" className="ml-3 text-sm text-primary">
                    I have exported any data I wish to keep.{' '}
                    <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!canSubmit}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
                  canSubmit
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Delete My Account
              </button>
            </form>
          </section>

          {/* Support */}
          <section className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-secondary mb-4">
              If you're having issues or have questions, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@grosure.ai"
                className="text-accent hover:underline font-semibold"
              >
                Email: support@grosure.ai
              </a>
              <Link href="/#faq" className="text-accent hover:underline font-semibold">
                Visit FAQ
              </Link>
            </div>
            <p className="text-sm text-secondary mt-2">Response Time: Within 24-48 hours</p>
          </section>
        </div>
      </main>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Are you absolutely sure?
            </h3>
            <p className="text-secondary mb-6">
              This action cannot be undone. Your account and all associated data will be permanently
              deleted within 30 days.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirmDialog(false)}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeletion}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
