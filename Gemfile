# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"

gem "jekyll"
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem "sassc", "< 2.2.0"
group :jekyll_plugins do
    gem "jekyll-feed", "~> 0.6"
    gem "jekyll-paginate"
  end
gem "webrick", "~> 1.7"
