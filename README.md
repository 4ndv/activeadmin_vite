# vite_rails + activeadmin

This is a demo repo showing integration of ActiveAdmin 4 and vite_rails.

There is a lot of Rails apps already using `vite_rails`, and many of them use ActiveAdmin 3.

This repo shows a sample application with:

- Vite Rails
- ActiveAdmin 4
- Two separate Tailwind configs for admin and app itself

## How-to

- Install activeadmin 4 as usual
- Install vite_rails
- Remove all the activeadmin autogenerated assets from `app/assets/` folder, because we will not need it
- Generate activeadmin partials by running `rails g active_admin:views`
- Proceed exactly as in commit [54e4c39](https://github.com/4ndv/activeadmin_vite/commit/54e4c39c00f76cf54263323e1f724da07b428fa0)
  - Convert autogenerated activeadmin tailwind config to ESM because Vite is really picky about that
  - Install `@activeadmin/activeadmin` npm package
  - Create a new entrypoint for admin (if you need to have two separate tailwind builds with different stuff JIT-ted out)
  - Create a styles file, fill it with basic tailwind stuff and specify correct config file
  - Import your styles and `@activeadmin/activeadmin` in your entrypoint
  - Edit `app/views/active_admin/_html_head.html.erb` to use vite instead of importmap and sprockets
