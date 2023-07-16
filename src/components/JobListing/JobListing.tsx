import type { JobListing } from "./types"
import Badge from "../Badge/Badge"
import { BadgeKind } from "../Badge/types"

export function JobListing({ company, new: isNew, featured }: JobListing) {
  return (
    <div>
      <p>{company}</p>
      {isNew && <Badge type={BadgeKind.New} />}
      {featured && <Badge type={BadgeKind.Featured} />}
    </div>
  )
}
