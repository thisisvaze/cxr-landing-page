import Link from "next/link";
import { ArrowUpRight, Box, MessageCircle, Mic } from "lucide-react";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SummaryScene from "./summary-scene";
import styles from "./summary.module.css";

const Summary = () => {
    return (
        <div id="spatial-learning" className={styles.summary}>
            <Wrapper className="py-16 lg:py-24">
                <div className={styles.layout}>
                    <div className={styles.copy}>
                        <h2 className={`type-heading ${styles.heading}`}>
                            Answers you can <span>step inside.</span>
                        </h2>
                        <p className="type-lead mt-6 max-w-md">
                            A question is just the beginning. Your AI teacher brings
                            the answer into your room, ready to explore from every angle.
                        </p>

                        <ol className={styles.steps} aria-label="How spatial learning works">
                            <li>
                                <Mic aria-hidden="true" />
                                <div><strong>Ask out loud.</strong> Start with whatever makes you curious.</div>
                            </li>
                            <li>
                                <Box aria-hidden="true" />
                                <div><strong>Get hands-on.</strong> Move, resize, and explore in 3D.</div>
                            </li>
                            <li>
                                <MessageCircle aria-hidden="true" />
                                <div><strong>Keep asking.</strong> Your teacher follows your pace.</div>
                            </li>
                        </ol>

                        <div className={styles.actions}>
                            <Button asChild size="lg" className={styles.cta}>
                                <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank" rel="noopener noreferrer">
                                    Get on Meta Quest <ArrowUpRight aria-hidden="true" />
                                </Link>
                            </Button>
                            <p>One question. A million things to discover.</p>
                        </div>
                    </div>

                    <SummaryScene />
                </div>
            </Wrapper>
        </div>
    );
};

export default Summary;
