import React from 'react';

export default function Modal({
    handleFunction,
    children,
}: {
    handleFunction: () => void;
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="background-modal" onClick={handleFunction}>
                <div className="content-modal">{children}</div>
            </div>
        </>
    );
}
