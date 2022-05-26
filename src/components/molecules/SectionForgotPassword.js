import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionForgotPassword() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-sm">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <Link
          to="/register"
          className="font-medium text-sm text-blue-600 hover:text-blue-500">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}