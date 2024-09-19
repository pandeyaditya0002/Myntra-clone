import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  const deals = [
    {
      id: 1,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/5/bdc4ccbd-151b-4f8a-9530-20906922e44b1701770781272-Snitch.png",
    },
    {
      id: 2,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/16bc7d97-6948-4755-9074-8d004f4c50431701809575364-download---2023-12-06T022246.780.png",
    },
    {
      id: 3,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/53f4c4ca-011f-4eb3-b6db-c27fbac6e3ba1701956789996-image_png_54848370.png",
    },
    {
      id: 4,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/da5cb674-a947-4bd1-9ab3-a2b7691fedab1701875932072-image_png1540250141.png",
    },
    {
      id: 5,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/f049db6b-27bb-472e-9d3f-0f13aca3f7ce1701956807592-image_png_647900830.png",
    },
    {
      id: 6,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/5/36626af5-dbdc-4caa-8ac7-f59413e911eb1701770781166-Party_Edits.png",
    },
    {
      id: 7,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/67109295-6a0b-4af3-9d67-ef3da77632e71701956825940-image_png1892853019.png",
    },
    {
      id: 8,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/5/bac828ec-5aea-42fe-8a35-0c3fdc5b65cf1701770781072-Lavie-_Caprese_Handbags-_Wallets__-_more.png",
    },
    {
      id: 9,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/5/9eeac42a-70a9-478b-9e40-6885f35c97af1701770780907-Allen_Solly-_Van_Heusen_-_more.png",
    },
    {
      id: 10,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/d1235cb5-1c8e-4b00-9f96-c236f9025c3e1701956869571-image_png1664191070.png",
    },
    {
      id: 11,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/5/8775182e-c3ad-491f-8293-175ff33b846d1701770781252-Skybags-Wildcraft_and_more_backpacks.png",
    },
    {
      id: 12,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/233dff99-0a36-4032-a08d-9c129c3e061b1701876040815-image_png1216896276.png",
    },
    {
      id: 13,
      image:
        "https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/35669955-4080-4c90-a3ea-5eb15f7574231701876066156-image_png1844644478.png",
    },
  ];

  const dealsCrazy = [
    {
      id: 1,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/0e221124-1811-43e1-b8b1-0811f5496d071701844927530-image_png1050553154.png",
    },
    {
      id: 2,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/2/2f3f5039-747c-4d77-8bca-a210a926803b1701496083671-Adidas_min._50_off.png",
    },
    {
      id: 3,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/2/ace0cb60-33a0-4309-8f52-39897f9064d01701496083365-Anouk_HOP_-_More_Min_65.png",
    },
    {
      id: 4,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/2/bcfa3725-3d9b-4953-a500-19196e52e3771701496083280-Aurelia-_GD_.png",
    },
    {
      id: 5,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/2/a5559538-1264-419d-ae90-6dbfdd6ac8f11701496083479-Biba-_W.png",
    },
    {
      id: 6,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/63f9cf8e-ab6e-4eff-95b1-c032777675491701848153374-image_png93945355.png",
    },
    {
      id: 7,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/2/e2eb2ffe-1942-46c7-b07f-4a34a76039ca1701502190296-Philips-_Braun_Min_25.png",
    },
    {
      id: 8,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/1be164ff-d46c-4a3e-9379-33de5ba65cbd1701842418214-image_png442697016.png",
    },
    {
      id: 9,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/2/4182305b-e94f-4ebf-ab8d-0460de2b55b61701502190284-Olay-_Kaya_-_min_30_off.png",
    },
    {
      id: 10,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/6/167abc3b-a343-4fd3-973d-ab25780b92f41701842433891-image_jpeg1727247391.jpg",
    },
    {
      id: 11,
      image:
        "https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/2/506a66ef-6ff6-482c-bae3-b70e61e19eaf1701502190255-Lakme.png",
    },
  ];

  const category = [
    {
      id: 1,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/440784b9-87a9-4062-9dff-9297e5d1cbb61700724828383-Shop-By-Category_HP--1-_01.jpg",
    },
    {
      id: 2,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/f4adce2b-d535-4375-babe-d9ace76d189c1700724828389-Shop-By-Category_HP--1-_02.jpg",
    },
    {
      id: 3,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/938dca15-a1e9-44bb-8587-4a558910e4411700724828394-Shop-By-Category_HP--1-_03.jpg",
    },
    {
      id: 4,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/2c8f2de6-8a56-4f65-ac89-a3f70ce4a0191700724828399-Shop-By-Category_HP--1-_04.jpg",
    },
    {
      id: 5,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/1c816444-25f9-45e7-b477-d0516457f6aa1700724828404-Shop-By-Category_HP--1-_05.jpg",
    },
    {
      id: 6,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/18501a22-e63e-4673-8870-66ad9bf8fa171700724828408-Shop-By-Category_HP--1-_06.jpg",
    },
    {
      id: 7,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/6ec91573-e469-41b4-9fce-3c8e703ba5811700724828413-Shop-By-Category_HP--1-_07.jpg",
    },
    {
      id: 8,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/2b6f7b84-ffc9-4daf-9d5e-05a36038f1c71700724828418-Shop-By-Category_HP--1-_08.jpg",
    },
    {
      id: 9,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/95b224e0-7d30-4e7c-b2d6-26f7d8d24a7f1700724828423-Shop-By-Category_HP--1-_09.jpg",
    },
    {
      id: 10,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/0a04f91e-cbdf-4661-9d5e-2a2979b3a11d1700724828428-Shop-By-Category_HP--1-_10.jpg",
    },
    {
      id: 11,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/f2416304-0d29-4afe-94a2-3fa0c7e8d7bd1700724828433-Shop-By-Category_HP--1-_11.jpg",
    },
    {
      id: 12,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/f63bdfec-0123-4657-8a7b-87877ae46ec01700724828438-Shop-By-Category_HP--1-_12.jpg",
    },
    {
      id: 13,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/a70ce50d-da04-4dba-8b6f-a5aff55c97371700724828443-Shop-By-Category_HP--1-_13.jpg",
    },
    {
      id: 14,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/5b5af732-3334-4b75-bc71-82d9008e58b81700724828448-Shop-By-Category_HP--1-_14.jpg",
    },
    {
      id: 15,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/400800b9-c35f-4f17-8b49-e62ff3a4b7c31700724828454-Shop-By-Category_HP--1-_15.jpg",
    },
    {
      id: 16,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/3b14a0b3-5b33-4f81-b37c-42246ad0ee971700724828459-Shop-By-Category_HP--1-_16.jpg",
    },
    {
      id: 17,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/da4629ca-c2ea-4bed-aef3-090d8d5c89b11700724828464-Shop-By-Category_HP--1-_17.jpg",
    },
    {
      id: 18,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/3e460c64-852e-469f-927e-802e0d332d0f1700724828469-Shop-By-Category_HP--1-_18.jpg",
    },
    {
      id: 19,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/8ae58ee3-5f49-4ac4-8d4e-dd3fc2c80c241700724828474-Shop-By-Category_HP--1-_19.jpg",
    },
    {
      id: 20,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/1a869f0d-ea0a-47cc-aa87-0135660f73db1700724828480-Shop-By-Category_HP--1-_20.jpg",
    },
    {
      id: 21,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/fe176c3c-b9c2-4320-a1a5-2a472d6f7c9c1700724828485-Shop-By-Category_HP--1-_21.jpg",
    },
    {
      id: 22,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/4b02d260-bc59-43b1-a82d-b7e3b266cfd81700724828490-Shop-By-Category_HP--1-_22.jpg",
    },
    {
      id: 23,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/5ac8afbb-f3ef-41db-9c0d-ee43f2fda60e1700724828495-Shop-By-Category_HP--1-_23.jpg",
    },
    {
      id: 24,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/22608310-fb3d-448c-9be1-5175a673c8251700724828501-Shop-By-Category_HP--1-_24.jpg",
    },
    {
      id: 25,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/972646b3-c10c-4833-bca9-ab164094692b1700724828506-Shop-By-Category_HP--1-_25.jpg",
    },
    {
      id: 26,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/227e9aaa-e4cd-4fa7-bd4f-39b621a468641700724828512-Shop-By-Category_HP--1-_26.jpg",
    },
    {
      id: 27,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/b614198b-9f72-4cd6-adcb-1f444750987a1700724828517-Shop-By-Category_HP--1-_27.jpg",
    },
    {
      id: 28,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/32381343-ca7c-47c6-8cf3-ca2885c2db201700724828523-Shop-By-Category_HP--1-_28.jpg",
    },
    {
      id: 29,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/aae56ec0-6266-4e11-9ec4-21f73b3ee7a61700724828529-Shop-By-Category_HP--1-_29.jpg",
    },
    {
      id: 30,
      image:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/ae18e9b3-6ee8-4796-a55a-afc573af278b1700724828534-Shop-By-Category_HP--1-_30.jpg",
    },
    {
      id: 31,
      image:
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/019aa46e-3b51-4312-a615-8ee88afa95471700724828546-Shop-By-Category_HP--1-_32.jpg",
    },
    {
      id: 32,
      image:
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/7b5514bc-9830-4f98-b7e6-1838aec65f1a1700724828552-Shop-By-Category_HP--1-_33.jpg",
    },
    {
      id: 33,
      image:
        "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/46744d51-efff-4b99-9330-d6dfef2eb0db1700724828558-Shop-By-Category_HP--1-_34.jpg",
    },
  ];

  return (
    <div style={{ width: "100%", zIndex: 0}}>
      <img
        style={{ objectFit: "cover", width: "84%" , marginLeft: '88px'}}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/8/774a79bb-15f8-4198-af3f-19120c5889ad1702051471696-Global-strip-980_100.gif"
        alt="banner"
      />
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/0f3abf3d-d305-41fe-a491-759abf1122011701953843355-FLAT-500-Off-on-1st-Purchase-Strip.jpg"
        alt="banner" 
        onClick={
          () => navigate("/product")
        }
      />
      <img
        style={{ objectFit: "cover", width: "50%" }}
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/18d7a368-6a17-4c57-ba12-d8a1bbe1cdcf1701962591751-Home-Page-Main-Banner_01.jpg"
        alt="banner"
      />
      <img
        style={{ objectFit: "cover", width: "50%" }}
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/fc1edf69-652f-467a-8772-aab0509cd1611701962575201-Home-Page-Main-Banner_02.jpg"
        alt="banner"
      />
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/387761bd-69df-47db-8fbf-7e2b149708291701954034425-Sponsor-Strip.jpg"
        alt="banner-3"
      />
      <img
        style={{ objectFit: "cover", width: "50%" }}
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/735575c2-03ab-49aa-888e-c625bc3ab8a51701954347074-MYNTRA200.jpg"
        alt="banner"
      />

      <img
        style={{ objectFit: "cover", width: "50%" }}
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/05c93476-a96e-4d98-9ecf-ce3c6229631b1701954347094-MYNTRA100.jpg"
        alt="banner"
      />
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/ef6043d5-167b-462f-b25e-668298ab162a1701954621231-Grand-Opening.jpg"
        alt="banner"
      />
      <div style={{ display: "flex" }}>
        {deals.map((item) => (
          <img
            style={{ width: "7.7%" }}
            src={item.image}
            key={item.id}
            alt=""
          />
        ))}
      </div>
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/eb1f8f53-6288-4cb1-a7e9-e1f4a140766a1701954621249-Crazy-Deals.jpg"
        alt="banner"
      />
      <div>
        {dealsCrazy.map((item) => (
          <img
            style={{ width: "9.09%" }}
            src={item.image}
            key={item.id}
            alt=""
          />
        ))}
      </div>
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/a1e6f8cf-f614-4e3f-9ef7-9f2d42854c8d1701954621266-Shop-By-Category.jpg"
        alt="banner"
      />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {category.map((item) => (
          <img
            style={{ width: "16.6%" }}
            src={item.image}
            key={item.id}
            alt=""
          />
        ))}
      </div>
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/7/85320b1d-9e96-4a04-958a-dcbb866d55a41701971522578-App-Install-Banner.jpg"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
