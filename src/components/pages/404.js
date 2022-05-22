import React from 'react';
import { Link } from 'react-router-dom';
import { Heading1 } from '../atoms';

export default function NotFound() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-zinc-50 mx-auto container max-w-md">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex-shrink-0 flex justify-center">
          <Heading1 title={'Power Humanity'} />
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium text-blue-600 hover:text-blue-500">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 hidden">
        <nav className=" justify-center space-x-4 hidden">
          <a
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Contact Support
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Status
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  );
}
