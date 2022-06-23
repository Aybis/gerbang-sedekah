import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionForgotPassword({ handlerClickRemember }) {
  return (
    <div className="flex items-end justify-end">
      <div className="hidden items-center text-sm">
        <input
          id="remember-me"
          name="remember-me"
          onChange={handlerClickRemember}
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900">
          Ingat saya
        </label>
      </div>

      <div className="text-sm">
        <Link
          to="/forgot"
          className="font-medium text-sm text-blue-600 hover:text-blue-500">
          Lupa password?
        </Link>
      </div>
    </div>
  );
}
