import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import Link from 'next/link'
import { useGetPosts } from '@/actions'

export default function Portfolios() {
  const { data, error, loading } = useGetPosts()

  const renderPosts = (data) => {
    return data.map((item) => (
      <li key={item.id}>
        <Link href={`/portfolios/${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </li>
    ))
  }
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am portfolios page</h1>
        {loading && <p>Loading...</p>}
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message} </div>}
      </BasePage>
    </BaseLayout>
  )
}
