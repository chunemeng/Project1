import React from 'react';
import PrivateLayout from "./layout_1";
const GuildInfo = () => {
    return (
        <div>
            <h2>公会详情</h2>
            {/* 展示公会信息 */}
            {/* 根据权限展示编辑按钮 */}
        </div>
    );
};

const GuildInfoPage = () => {
    return(
        <PrivateLayout>
            {GuildInfo}
        </PrivateLayout>
    );
}
export default GuildInfoPage;