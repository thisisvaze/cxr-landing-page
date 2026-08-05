import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";
import { APP_NAME } from "@/utils";

export const alt = `${APP_NAME}, the #1 AI learning app on Meta Quest`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toDataUri = async (relativePath: string) => {
    const file = await fs.readFile(path.join(process.cwd(), "public", relativePath));
    return `data:image/png;base64,${file.toString("base64")}`;
};

export default async function OpenGraphImage() {
    const [hero, logo] = await Promise.all([
        toDataUri("images/mission_header.png"),
        toDataUri("images/cxr-logo.png"),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    background:
                        "linear-gradient(135deg, #101010 0%, #16101f 55%, #1d1330 100%)",
                    color: "#fafafa",
                    padding: "64px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "620px",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={APP_NAME} width={236} height={60} />
                    <div
                        style={{
                            marginTop: "36px",
                            display: "flex",
                            alignSelf: "flex-start",
                            padding: "8px 18px",
                            borderRadius: "999px",
                            border: "1px solid rgba(158,122,255,0.55)",
                            background: "rgba(158,122,255,0.14)",
                            color: "#cbb8ff",
                            fontSize: "24px",
                        }}
                    >
                        #1 AI Learning App on Meta Quest
                    </div>
                    <div
                        style={{
                            marginTop: "28px",
                            fontSize: "62px",
                            lineHeight: 1.08,
                            letterSpacing: "-1.5px",
                        }}
                    >
                        Learn with an AI Teacher in 3D
                    </div>
                    <div
                        style={{
                            marginTop: "24px",
                            fontSize: "28px",
                            lineHeight: 1.35,
                            color: "#a3a3a3",
                        }}
                    >
                        Ask anything out loud. See the answer appear as an
                        interactive 3D model in your room.
                    </div>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hero} alt="" width={440} height={274} />
            </div>
        ),
        size,
    );
}
