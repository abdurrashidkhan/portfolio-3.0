    "use client";

    import React from "react";
    import Link from "next/link";
    import { NavbarProps } from "./types";
    import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    } from "@/components/ui/navigation-menu";
    import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
    import { Button } from "@/components/ui/button";
    import { Menu } from "lucide-react";

    export function Navbar({
    logo,
    items,
    buttons = [],
    className = "",
    mobileClassName = "",
    onLinkClick,
    }: NavbarProps) {
    const handleClick = (href: string) => onLinkClick?.(href);

    return (
        <header
        className={`sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md ${className}`}
        >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
            {logo}
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-6">
                {items.map((item) =>
                item.subItems ? (
                    <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white p-4 rounded shadow-lg">
                        <div className="flex flex-col">
                        {item.subItems.map((sub) => (
                            <NavigationMenuLink asChild key={sub.label}>
                            <Link
                                href={sub.href}
                                onClick={() => handleClick(sub.href)}
                                className="text-sm py-2 hover:text-primary"
                            >
                                {sub.label}
                            </Link>
                            </NavigationMenuLink>
                        ))}
                        </div>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                ) : (
                    <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                        <Link
                        href={item.href!}
                        onClick={() => handleClick(item.href!)}
                        className="text-sm font-medium hover:text-primary"
                        >
                        {item.label}
                        </Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                ),
                )}
            </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
            {buttons.map((btn) => (
                <Link key={btn.label} href={btn.href}>
                <Button className={btn.className}>{btn.label}</Button>
                </Link>
            ))}
            </div>

            {/* Mobile Navigation */}
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className={`w-64 ${mobileClassName}`}>
                <div className="flex flex-col gap-4 mt-8">
                {items.map((item) =>
                    item.subItems ? (
                    <div key={item.label}>
                        <span className="font-medium">{item.label}</span>
                        <div className="ml-4 flex flex-col gap-2">
                        {item.subItems.map((sub) => (
                            <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => handleClick(sub.href)}
                            >
                            {sub.label}
                            </Link>
                        ))}
                        </div>
                    </div>
                    ) : (
                    <Link
                        key={item.label}
                        href={item.href!}
                        onClick={() => handleClick(item.href!)}
                    >
                        {item.label}
                    </Link>
                    ),
                )}
                {buttons.map((btn) => (
                    <Link key={btn.label} href={btn.href}>
                    <Button className={btn.className}>{btn.label}</Button>
                    </Link>
                ))}
                </div>
            </SheetContent>
            </Sheet>
        </div>
        </header>
    );
    }
