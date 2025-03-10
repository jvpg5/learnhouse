import AuthenticatedClientElement from '@components/Security/AuthenticatedClientElement'
import { getUriWithOrg } from '@services/config/config'
import { BookCopy, Signpost, SquareLibrary } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function MenuLinks(props: { orgslug: string }) {
  return (
    <div className='pl-1'>
      <ul className="flex space-x-5">
        <LinkItem
          link="/courses"
          type="courses"
          orgslug={props.orgslug}
        ></LinkItem>
        <LinkItem
          link="/collections"
          type="collections"
          orgslug={props.orgslug}
        ></LinkItem>
        <AuthenticatedClientElement checkMethod="authentication">
          <LinkItem
            link="/trail"
            type="trail"
            orgslug={props.orgslug}
          ></LinkItem>
        </AuthenticatedClientElement>
      </ul>
    </div>
  )
}
const LinkItem = (props: any) => {
  const link = props.link
  const orgslug = props.orgslug
  const t = useTranslations("General");
  return (
    <Link href={getUriWithOrg(orgslug, link)}>
      <li className="flex space-x-2 items-center text-[#909192] font-medium">
        {props.type == 'courses' && (
          <>
            <BookCopy size={20}  />{' '}
            <span>{t("courses")}</span>
          </>
        )}

        {props.type == 'collections' && (
          <>
            <SquareLibrary size={20} />{' '}
            <span>{t("collections")}</span>
          </>
        )}

        {props.type == 'trail' && (
          <>
            <Signpost size={20} />{' '}
            <span>{t("trail")}</span>
          </>
        )}
      </li>
    </Link>
  )
}
export default MenuLinks
