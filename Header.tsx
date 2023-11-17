import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Categories
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Products
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Liked
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
