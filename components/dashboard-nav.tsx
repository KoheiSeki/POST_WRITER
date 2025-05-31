import { SidebarNavItem } from "@/types";
import Link from "next/link";
import React from "react";
import { Icon as Icons } from "./icon";

// DashboardNavPropsの型定義
interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardNav = ({ items }: DashboardNavProps) => {
  // itemsが空または未定義の場合はnullを返す
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      {/* サイドバーの項目を表示 */}
      {items.map((item, index) => {
        // アイテムアイコンを取得
        const Icon = Icons[item.icon || "allowRight"];
        return (
          <Link href={item.href} key={index}>
            <span
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground`}
            >
              {/* アイテムアイコン */}
              <Icon className="mr-2 h-4 w-4" />

              {/* アイテムタイトル */}
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default DashboardNav;
