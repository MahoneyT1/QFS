import { motion } from 'motion/react'
import Button from '../UI/Button'
import { ArrowUpRight } from 'lucide-react'

export default function Hero () {

    return (
        // gradient grid style box for background
        <div className="absolute inset-0"
            style={{
                backgroundImage: `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
                                linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)`,
                backgroundSize: '14px 24px',
            }}>

            {/* hero section content */}

            <div>
                <div> Next Generation Financial System </div>
                <h1>
                    Welcome to the Quantum Financial System
                </h1>

                <p>
                    Experience the future of secure, transparent, and 
                    lightning-fast digital transactions powered by quantum technology.
                </p>

                <div>
                    <Button name="Get Started" icon={<ArrowUpRight />}/>
                    <Button name="Learn More" />
                </div>


            </div>
        </div>
    )
}