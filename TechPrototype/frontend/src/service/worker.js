import {getJson, PREFIX} from "./common";

export async function getWorkerById(id) {
    // const url = `${PREFIX}/worker/${id}`;
    // let worker;
    // try {
    //     worker = await getJson(url);
    // } catch (e) {
    //     console.log(e);
    //     worker = null;
    // }
    let worker = {
        "id": id,
        "title": "[自助测试]快速部署用于自助测试的工作室",
        "name": "测试工作室",
        "description": "我们立志于为用户提供测试用例, 旨在让用户花费最少的价钱, 实现最全面的测试, 在服务的100年间，我们收获无数好评。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Faucibus ornare suspendisse sed nisi lacus sed viverra. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Egestas erat imperdiet sed euismod nisi porta lorem. Scelerisque felis imperdiet proin fermentum leo. Odio morbi quis commodo odio aenean sed adipiscing. Justo nec ultrices dui sapien eget. Feugiat in fermentum posuere urna nec. Nulla facilisi cras fermentum odio eu feugiat pretium. Ut pharetra sit amet aliquam id diam maecenas. Viverra accumsan in nisl nisi scelerisque eu ultrices. Penatibus et magnis dis parturient. Viverra justo nec ultrices dui sapien eget mi proin sed.\n" +
            "\n" +
            "Augue eget arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Turpis nunc eget lorem dolor sed viverra ipsum. In hendrerit gravida rutrum quisque non tellus. Condimentum id venenatis a condimentum vitae sapien pellentesque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Odio morbi quis commodo odio aenean. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Nisl condimentum id venenatis a. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus. Vitae aliquet nec ullamcorper sit amet risus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sapien et ligula ullamcorper malesuada proin. Diam quam nulla porttitor massa id. Nulla aliquet enim tortor at auctor. Elit pellentesque habitant morbi tristique. Urna molestie at elementum eu facilisis.\n" +
            "\n" +
            "Vel pretium lectus quam id. Hendrerit gravida rutrum quisque non. Malesuada fames ac turpis egestas. Facilisis gravida neque convallis a. Pretium lectus quam id leo in vitae. Aenean et tortor at risus viverra. Non pulvinar neque laoreet suspendisse interdum. Massa sed elementum tempus egestas sed sed risus pretium quam. Velit sed ullamcorper morbi tincidunt. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Tellus orci ac auctor augue. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Nunc sed velit dignissim sodales ut eu sem integer. Nisi est sit amet facilisis magna etiam tempor orci. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet."
    };
    return worker;
}

export async function searchUnions(keyword, pageIndex, pageSize) {
    const url = `${PREFIX}/unions?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    let unions;
    try {
        unions = await getJson(url);
    } catch (e) {
        console.log(e);
        unions = {
            total: 0,
            items: []
        };
    }
    return unions;
}