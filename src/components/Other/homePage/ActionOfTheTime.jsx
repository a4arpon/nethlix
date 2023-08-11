'use client'

import ContentCard from '@/components/shared/Cards/ContentCard'

const ActionOfTheTime = ({ actionList }) => {
  console.log(actionList)
  return (
    <section id="actionSection" className="grid gap-3 lg:grid-cols-3">
      {actionList?.map((item) => (
        <ContentCard key={item?.id} contentData={item} />
      ))}
    </section>
  )
}

export default ActionOfTheTime
