
export function formatDate(isoDateString) {
    const date = new Date(isoDateString); // 解析 ISO 8601 格式的日期字符串
    const year = date.getFullYear(); // 获取年份
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份，并补零
    const day = String(date.getDate()).padStart(2, '0'); // 获取日期，并补零
    const hours = String(date.getHours()).padStart(2, '0'); // 获取小时，并补零
    const minutes = String(date.getMinutes()).padStart(2, '0'); // 获取分钟，并补零
    const seconds = String(date.getSeconds()).padStart(2, '0'); // 获取秒钟，并补零

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}