import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <Image src="/logo.png" alt='logo' width={200} height={60} className='h-12 py-1 w-auto object-contain' />
                </Link>

                <div>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button>
                                <LayoutDashboard className='h-4 w-4' />
                                Industry Insights
                            </Button>
                        </Link>
                    </SignedIn>
                </div>
            </nav>

            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}

export default Header
