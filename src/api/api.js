// @flow
import config from './config.json'

type RepoFetchResponse = {
  items: {
    id: number,
    html_url: string,
    full_name: string,
    stargazers_count: number,
  }
}

/**
 * @todo: good to make singleton
 */
export class Api {
  $$fetch(path: string, options: Object = {}) {
    return new Request(config.url + path, {
      ...options,
      headers: {
        ...config.headers,
      },
    })
  }

  fetchRepos({ license } : { license: string }): Promise<RepoFetchResponse> {
    const date = new Date()
    date.setMonth(date.getMonth() - 1)
    const dateMask = date.toISOString().replace(/^(\d{4}-\d{2}-\d{2}).*/, '$1')

    const licenseParam = license ? `+license:${license}` : '';

    const query = `q=topic:javascript+created:>=${dateMask}${licenseParam}&sort=stargazers_count&order=desc&limit=100`
    const request = this.$$fetch(`/search/repositories?${query}`)
    return fetch(request)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          return res.json().then(res => {throw new Error(JSON.stringify(res))})
        }
      })
  }
}
