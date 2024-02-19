import { TableColumn } from "react-data-table-component";
import { Badges, Image, LI, UL } from "../../../AbstractElements";
import { CustomCellInterFace, CustomNameImageProp, ScrollVerticalColumnsType, StateSavingTableColumnsType, zeroConfigurationTableColumnsType } from "../../../Types/TableType";
import { dynamicImage } from "../../../Utils";
import { Href } from "../../../Utils/Constants";

export const zeroConfigurationSpan: string = ` DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.`
export const zeroConfigurationSpan2: string = `Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.`;
export const stateSavingSpan: string = `DataTables has the option of being able to save the state of a table (its paging position, ordering state etc) so that is can be restored when the user reloads a page, or comes back to the page after visiting a sub-page. This state saving ability is enabled by the <code className="option">stateSave</code> option. The built in state saving method uses the HTML5 <code>localStorage</code> and <code>sessionStorage</code> APIs for efficient storage of the data. Please note that this means that the built in state saving option <strong>will not work with IE6/7</strong> as these browsers do not support these APIs. Alternative options of using cookies or saving the state on the server through Ajax can be used through the <code className="option">stateSaveCallback</code> and<a href="#javascript"><code className="option">stateLoadCallback</code></a>options.`
export const stateSavingSpan2: string = `The duration for which the saved state is valid and can be used to restore the table state can be set using the <code className="option">stateDuration</code> initialisation parameter (2 hours by default). This parameter also controls if <code>localStorage</code> (0 or greater) or <code>sessionStorage</code> (-1) is used to store the data. The example below simply shows state saving enabled in DataTables with the <code className="option">stateSave</code> option.`
export const dynamicHeightSpan1: string = ` This example shows a vertically scrolling DataTable that makes use of the CSS3 vh unit in order to dynamically resize the viewport based on the browser window height. The vh unit is effectively a percentage of the browser window height. So the 50vh used in this example is 50% of the window height. The viewport size will update dynamically as the window is resized.`
export const dynamicHeightSpan2: string = ` A relatively modern browser is required for vh units to operate correctly. IE9+ supports the vh unit and all other evergreen browsers. `

export const zeroConfigurationTableData: zeroConfigurationTableColumnsType[] = [
    {
        id: 1,
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: 33,
        startDate: "2008/11/28",
        salary: "$162,700",
    },
    {
        id: 2,
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: 66,
        startDate: "2009/01/12",
        salary: "$86,000",
    },
    {
        id: 3,
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: 61,
        startDate: "2012/12/02",
        salary: "$372,000",
    },
    {
        id: 4,
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: 22,
        startDate: "2012/03/29",
        salary: "$433,060",
    },
    {
        id: 5,
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: 36,
        startDate: "2008/10/16",
        salary: "$470,600",
    },
    {
        id: 6,
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: 39,
        startDate: "2009/09/15",
        salary: "$205,500",
    },
    {
        id: 7,
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: 27,
        startDate: "2011/01/25",
        salary: "$112,000",
    },
    {
        id: 8,
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: 63,
        startDate: "2011/07/25",
        salary: "$170,750",
    },
    {
        id: 9,
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: 59,
        startDate: "2012/08/06",
        salary: "$137,500",
    },
    {
        id: 10,
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: 30,
        startDate: "2008/12/19",
        salary: "$90,560",
    },
    {
        id: 11,
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: 22,
        startDate: "2013/03/03",
        salary: "$342,000",
    },
    {
        id: 12,
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: 55,
        startDate: "2010/10/14",
        salary: "$327,900",
    },
    {
        id: 13,
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: 23,
        startDate: "2008/12/13",
        salary: "$103,600",
    },
    {
        id: 14,
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: 61,
        startDate: "2011/04/25",
        salary: "$320,800",
    },
];

export const zeroConfigurationTableColumns: TableColumn<zeroConfigurationTableColumnsType>[] = [
    {
        name: "Name",
        selector: (row) => row["name"],
        sortable: true,
    },
    {
        name: "Position",
        selector: (row) => `${row.position}`,
        sortable: true,
    },
    {
        name: "office",
        selector: (row) => `${row.office}`,
        sortable: true,
    },
    {
        name: "Age",
        selector: (row) => `${row.age}`,
        sortable: true,
    },
    {
        name: "start Date",
        selector: (row) => row["startDate"],
        sortable: true,
    },
    {
        name: "salary",
        selector: (row) => `${row.salary}`,
        sortable: true,
    },
    {
        name: "action",
        sortable: false,
        cell: () => (
            <UL className="action simple-list flex-row">
                <LI className="edit"><a href={Href}><i className="icon-pencil-alt" /></a></LI>
                <LI className="delete"><a href={Href}><i className="icon-trash" /></a></LI>
            </UL>
        )
    }
];

export const childRowsTableColumns: TableColumn<zeroConfigurationTableColumnsType>[] = [
    {
        name: "Name",
        selector: (row) => row["name"],
        sortable: true,
    },
    {
        name: "Position",
        selector: (row) => `${row.position}`,
        sortable: true,
    },
    {
        name: "office",
        selector: (row) => `${row.office}`,
        sortable: true,
    },
    {
        name: "Salary",
        selector: (row) => `${row.salary}`,
        sortable: true,
    },
];

export const stateSavingTableData: StateSavingTableColumnsType[] = [
    {
        id: 1,
        name: "Tiger Nixon",
        position: "Accountant",
        color: "secondary",
        office: "Edinburgh",
        age: 61,
        startDate: "2011/04/25",
        salary: "$320,800",
    },
    {
        id: 2,
        name: "Garrett Winters",
        position: "Accountant",
        color: "secondary",
        office: "Tokyo",
        age: 63,
        startDate: "2011/07/25",
        salary: "$170,750",
    },
    {
        id: 3,
        name: "Ashton Cox",
        position: "Junior Technical Author",
        color: "primary",
        office: "San Francisco",
        age: 66,
        startDate: "2009/01/12",
        salary: "$86,000",
    }, {
        id: 4,
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        color: "primary",
        office: "Edinburgh",
        age: 22,
        startDate: "2012/03/29",
        salary: "$433,060",
    }, {
        id: 5,
        name: "Airi Satou",
        position: "Accountant",
        color: "secondary",
        office: "Tokyo",
        age: 33,
        startDate: "2008/11/28",
        salary: "$162,700",
    }, {
        id: 6,
        name: "Brielle Williamson",
        position: "Integration Specialist",
        color: "info",
        office: "New York",
        age: 61,
        startDate: "2012/12/02",
        salary: "$372,000",
    }, {
        id: 7,
        name: "Herrod Chandler",
        position: "Sales Assistant",
        color: "primary",
        office: "San Francisco",
        age: 59,
        startDate: "2012/08/06",
        salary: "$137,500",
    }, {
        id: 8,
        name: "Rhona Davidson",
        position: "Integration Specialist",
        color: "info",
        office: "Tokyo",
        age: 55,
        startDate: "2010/10/14",
        salary: "$327,900",
    }, {
        id: 9,
        name: "Colleen Hurst",
        position: "Javascript Developer",
        color: "danger",
        office: "San Francisco",
        age: 39,
        startDate: "2009/09/15",
        salary: "$205,500",
    }, {
        id: 10,
        name: "Sonya Frost",
        position: "Software Engineer",
        color: "success",
        office: "Edinburgh",
        age: 23,
        startDate: "2008/12/13",
        salary: "$103,600",
    }, {
        id: 11,
        name: "Jena Gaines",
        position: "Office Manager",
        color: "primary",
        office: "London  ",
        age: 30,
        startDate: "2008/12/19 ",
        salary: "$90,560 ",
    }, {
        id: 12,
        name: "Quinn Flynn",
        position: "Support Lead",
        color: "primary",
        office: "Edinburgh",
        age: 22,
        startDate: "2013/03/03",
        salary: "$342,000",
    }, {
        id: 13,
        name: "Charde Marshall",
        position: "Regional Director",
        color: "info",
        office: "San Francisco",
        age: 36,
        startDate: "2008/10/16",
        salary: "$470,600",
    }, {
        id: 14,
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        color: "primary",
        office: "London",
        age: 43,
        startDate: "2012/12/18",
        salary: "$313,500",
    }, {
        id: 15,
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        color: "info",
        office: "London",
        age: 19,
        startDate: "2010/03/17",
        salary: "$385,750",
    }, {
        id: 16,
        name: "Michael Silva",
        position: "Marketing Designer",
        color: "primary",
        office: "London",
        age: 66,
        startDate: "2012/11/27",
        salary: "$198,500",
    }, {
        id: 17,
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        color: "primary",
        office: "New York",
        age: 64,
        startDate: "2010/06/09",
        salary: "$725,000",
    }, {
        id: 18,
        name: "Gloria Little",
        position: "Systems Administrator",
        color: "primary",
        office: "New York",
        age: 59,
        startDate: "2009/04/10",
        salary: "$237,500",
    }, {
        id: 19,
        name: "Bradley Greer",
        position: "Software Engineer",
        color: "success",
        office: "London",
        age: 41,
        startDate: "2012/10/13",
        salary: "$132,000",
    }, {
        id: 20,
        name: "Dai Rios",
        position: "Personnel Lead",
        color: "primary",
        office: "Edinburgh",
        age: 35,
        startDate: "2012/09/26",
        salary: "$217,500",
    }, {
        id: 21,
        name: "Jenette Caldwell",
        position: "Development Lead",
        color: "primary",
        office: "New York",
        age: 30,
        startDate: "2011/09/03",
        salary: "$345,000",
    }, {
        id: 22,
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        color: "primary",
        office: "New York",
        age: 40,
        startDate: "2009/06/25",
        salary: "$675,000",
    }, {
        id: 23,
        name: "Caesar Vance",
        position: "Pre-Sales Support",
        color: "primary",
        office: "New York",
        age: 21,
        startDate: "2011/12/12",
        salary: "$106,450",
    }, {
        id: 24,
        name: "Doris Wilder",
        position: "Sales Assistant",
        color: "primary",
        office: "Sidney",
        age: 23,
        startDate: "2010/09/20",
        salary: "$85,600",
    }, {
        id: 25,
        name: "Angelica Ramos",
        position: "Chief Executive Officer (CEO)",
        color: "primary",
        office: "London",
        age: 47,
        startDate: "2009/10/09",
        salary: "$1,200,000",
    }, {
        id: 26,
        name: "Gavin Joyce",
        position: "Developer",
        color: "success",
        office: "Edinburgh",
        age: 42,
        startDate: "2010/12/22",
        salary: "$92,575",
    }, {
        id: 27,
        name: "Jennifer Chang",
        position: "Regional Director",
        color: "info",
        office: "Singapore",
        age: 28,
        startDate: "2010/11/14",
        salary: "$357,650",
    }, {
        id: 28,
        name: "Brenden Wagner",
        position: "Software Engineer",
        color: "successs",
        office: "San Francisco",
        age: 28,
        startDate: "2011/06/07",
        salary: "$206,850",
    }, {
        id: 29,
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        color: "primary",
        office: "San Francisco",
        age: 48,
        startDate: "2010/03/11",
        salary: "$850,000",
    }, {
        id: 30,
        name: "Shou Itou",
        position: "Regional Marketing",
        color: "primary",
        office: "Tokyo",
        age: 20,
        startDate: "2011/08/14",
        salary: "$163,000",
    }, {
        id: 31,
        name: "Michelle House",
        position: "Integration Specialist",
        color: "info",
        office: "Sidney",
        age: 37,
        startDate: "2011/06/02",
        salary: "$95,400",
    }, {
        id: 32,
        name: "Suki Burks",
        position: "Developer",
        color: "success",
        office: "London",
        age: 53,
        startDate: "2009/10/22",
        salary: "$114,500",
    }, {
        id: 33,
        name: "Prescott Bartlett",
        position: "Technical Author",
        color: "primary",
        office: "London",
        age: 27,
        startDate: "2011/05/07",
        salary: "$145,000",
    }, {
        id: 34,
        name: "Gavin Cortez",
        position: "Team Leader",
        color: "primary",
        office: "San Francisco",
        age: 22,
        startDate: "2008/10/26",
        salary: "$235,500",
    }, {
        id: 35,
        name: "Martena Mccray",
        position: "Post-Sales support",
        color: "primary",
        office: "Edinburgh",
        age: 46,
        startDate: "2011/03/09",
        salary: "$324,050",
    }, {
        id: 36,
        name: "Unity Butler",
        position: "Marketing Designer",
        color: "primary",
        office: "San Francisco",
        age: 47,
        startDate: "2009/12/09",
        salary: "$85,675",
    }, {
        id: 37,
        name: "Howard Hatfield",
        position: "Office Manager",
        color: "primary",
        office: "San Francisco",
        age: 51,
        startDate: "2008/12/16",
        salary: "$164,500",
    }, {
        id: 38,
        name: "Hope Fuentes",
        position: "Secretary",
        color: "primary",
        office: "San Francisco",
        age: 41,
        startDate: "2010/02/12",
        salary: "$109,850",
    }, {
        id: 39,
        name: "Vivian Harrell",
        position: "Financial Controller",
        color: "primary",
        office: "San Francisco",
        age: 62,
        startDate: "2009/02/14",
        salary: "$452,500",
    }, {
        id: 40,
        name: "Timothy Mooney",
        position: "Office Manager",
        color: "primary",
        office: "London",
        age: 37,
        startDate: "2008/12/11",
        salary: "$136,200",
    }, {
        id: 41,
        name: "Jackson Bradshaw",
        position: "Director",
        color: "primary",
        office: "New York",
        age: 65,
        startDate: "2008/09/26",
        salary: "$645,750",
    }, {
        id: 42,
        name: "Olivia Liang",
        position: "Support Engineer",
        color: "primary",
        office: "Singapore",
        age: 64,
        startDate: "2011/02/03",
        salary: "$234,500",
    }, {
        id: 43,
        name: "Bruno Nash",
        position: "Software Engineer",
        color: "success",
        office: "London",
        age: 38,
        startDate: "2011/05/03",
        salary: "$163,500",
    }, {
        id: 44,
        name: "Sakura Yamamoto",
        position: "Support Engineer",
        color: "primary",
        office: "Tokyo",
        age: 37,
        startDate: "2009/08/19",
        salary: "$139,575",
    }, {
        id: 45,
        name: "Thor Walton",
        position: "Developer",
        color: "primary",
        office: "New York",
        age: 61,
        startDate: "2013/08/11",
        salary: "$98,540",
    }, {
        id: 46,
        name: "Finn Camacho",
        position: "Support Engineer",
        color: "primary",
        office: "San Francisco",
        age: 47,
        startDate: "2009/07/07",
        salary: "$87,500",
    }, {
        id: 47,
        name: "Serge Baldwin",
        position: "Data Coordinator",
        color: "primary",
        office: "Singapore",
        age: 64,
        startDate: "2012/04/09",
        salary: "$138,575",
    }, {
        id: 48,
        name: "Zenaida Frank",
        position: "Software Engineer",
        color: "success",
        office: "New York",
        age: 63,
        startDate: "2010/01/04",
        salary: "$125,250",
    }, {
        id: 49,
        name: "Zorita Serrano",
        position: "Software Engineer",
        color: "success",
        office: "San Francisco",
        age: 56,
        startDate: "2012/06/01",
        salary: "$115,000",
    }, {
        id: 50,
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        color: "primary",
        office: "Edinburgh",
        age: 43,
        startDate: "2013/02/01",
        salary: "$75,650",
    }, {
        id: 51,
        name: "Cara Stevens",
        position: "Sales Assistant",
        color: "primary",
        office: "New York",
        age: 46,
        startDate: "2011/12/06",
        salary: "$145,600",
    }, {
        id: 52,
        name: "Hermione Butler",
        position: "Regional Director",
        color: "info",
        office: "London",
        age: 47,
        startDate: "2011/03/21",
        salary: "$356,250",
    }, {
        id: 53,
        name: "Lael Greer",
        position: "Systems Administrator",
        color: "primary",
        office: "London",
        age: 21,
        startDate: "2009/02/27",
        salary: "$103,500",
    }, {
        id: 54,
        name: "Jonas Alexander",
        position: "Developer",
        color: "success",
        office: "San Francisco",
        age: 30,
        startDate: "2010/07/14",
        salary: "$86,500",
    }, {
        id: 55,
        name: "Shad Decker",
        position: "Regional Director",
        color: "info",
        office: "Edinburgh",
        age: 51,
        startDate: "2008/11/13",
        salary: "$183,000",
    }, {
        id: 56,
        name: "Michael Bruce",
        position: "Javascript Developer",
        color: "danger",
        office: "Singapore",
        age: 29,
        startDate: "2011/06/27",
        salary: "$183,000",
    }, {
        id: 57,
        name: "Donna Snider",
        position: "Customer Support",
        color: "primary",
        office: "New York",
        age: 27,
        startDate: "2011/01/25",
        salary: "$112,000",
    }

];

const CustomBadge = ({ position, color }: CustomCellInterFace) => {
    return (
        <Badges className="rounded-pill"  color={color}>{position}</Badges>
    )
};
export const stateSavingTableColumns: TableColumn<StateSavingTableColumnsType>[] = [
    {
        name: "Name",
        selector: (row) => row["name"],
        sortable: true,
    },
    {
        name: "Position",
        selector: (row) => row.position,
        sortable: true,
        cell: (row) => <CustomBadge color={row.color} position={row.position} />,
    },
    {
        name: "Office",
        selector: (row) => `${row.office}`,
        sortable: true,
    },
    {
        name: "Age",
        selector: (row) => `${row.age}`,
        sortable: true,
    },
    {
        name: "Start Date",
        selector: (row) => row["startDate"],
        sortable: true,
    },
    {
        name: "Salary",
        selector: (row) => `${row.salary}`,
        sortable: true,
    },
    {
        name: "Action",
        sortable: true,
        cell: () => (
            <UL className="action simple-list flex-row">
                <LI className="edit"><a href={Href}><i className="icon-pencil-alt" /></a></LI>
                <LI className="delete"><a href={Href}><i className="icon-trash" /></a></LI>
            </UL>
        )
    },
];

export function CustomNameImage({ src, name }: CustomNameImageProp) {
    return (
        <>
            <Image className="img-fluid table-avtar" src={`${dynamicImage(`user/${src}`)}`} alt="userImage" body={true} />
            {name}
        </>
    )
};

export const scrollVerticalDynamicHeightData: ScrollVerticalColumnsType[] = [
    {

        id: 1,
        image: '1.jpg',
        name: 'Zorita Serrano',
        position: "Software Engineer",
        office: "San Francisco",
        age: 56,
        startDate: "2012/06/01",
        salary: "$115,000",
    },
    {
        id: 2,
        image: '12.png',
        name: 'Zenaida Frank',
        position: "Software Engineer",
        office: "New York",
        age: 63,
        startDate: "2010/01/04",
        salary: "$125,250",
    },
    {
        id: 3,
        image: '2.png',
        name: 'Yuri Berry',
        position: "Chief Marketing Officer (CMO)",
        office: "New York",
        age: 40,
        startDate: "2009/06/25",
        salary: "$675,000",
    }, {
        id: 4,
        image: '2.jpg',
        name: 'Vivian Harrell',
        position: "Financial Controller",
        office: "San Francisco",
        age: 62,
        startDate: "2009/02/14",
        salary: "$452,500",
    }, {
        id: 5,
        image: '12.png',
        name: 'Unity Butler',
        position: "Marketing Designer",
        office: "San Francisco",
        age: 47,
        startDate: "2009/12/09",
        salary: "$85,675",
    }, {
        id: 6,
        image: '12.png',
        name: 'Timothy Mooney',
        position: "Office Manager",
        office: "London",
        age: 37,
        startDate: "2008/12/11",
        salary: "$136,200",
    }, {
        id: 7,
        image: '1.jpg',
        name: 'Tiger Nixon',
        position: "System Architect",
        office: "Edinburgh",
        age: 61,
        startDate: "2011/04/25",
        salary: "$320,800",
    }, {
        id: 8,
        image: '1.jpg',
        name: 'Thor Walton',
        position: "Developer",
        office: "New York",
        age: 61,
        startDate: "2013/08/11",
        salary: "$98,540",
    }, {
        id: 9,
        image: '2.jpg',
        name: 'Tatyana Fitzpatrick',
        position: "Regional Director",
        office: "London",
        age: 19,
        startDate: "2010/03/17",
        salary: "$385,750",
    }, {
        id: 10,
        image: '12.png',
        name: 'Suki Burks',
        position: "Developer",
        office: "London",
        age: 53,
        startDate: "2009/10/22",
        salary: "$114,500",
    }, {
        id: 11,
        image: '2.png',
        name: 'Sonya Frost',
        position: "Software Engineer",
        office: "Edinburgh",
        age: 23,
        startDate: "2008/12/13",
        salary: "$103,600",
    }, {
        id: 12,
        image: '2.png',
        name: 'Shou Itou',
        position: "Regional Marketing",
        office: "Tokyo",
        age: 20,
        startDate: "2011/08/14",
        salary: "$163,000",
    }, {
        id: 13,
        image: '2.jpg',
        name: 'Shad Decker',
        position: "Regional Director",
        office: "Edinburgh",
        age: 51,
        startDate: "2008/11/13",
        salary: "$183,000",
    }, {
        id: 14,
        image: '2.jpg',
        name: 'Serge Baldwin',
        position: "Data Coordinator",
        office: "Singapore",
        age: 64,
        startDate: "2012/04/09",
        salary: "$138,575",
    }, {
        id: 15,
        image: '12.png',
        name: 'Sakura Yamamoto',
        position: "Support Engineer",
        office: "Tokyo",
        age: 37,
        startDate: "2009/08/19",
        salary: "$139,575",
    }, {
        id: 16,
        image: '12.png',
        name: 'Rhona Davidson',
        position: "Integration Specialist",
        office: "Tokyo",
        age: 55,
        startDate: "2010/10/14",
        salary: "$327,900",
    }, {
        id: 17,
        image: '12.png',
        name: 'Quinn Flynn',
        position: "Support Lead",
        office: "Edinburgh",
        age: 22,
        startDate: "2013/03/03",
        salary: "$342,000",
    }, {
        id: 18,
        image: '1.jpg',
        name: 'Prescott Bartlett',
        position: "Technical Author",
        office: "London",
        age: 27,
        startDate: "2011/05/07",
        salary: "$145,000",
    }, {
        id: 19,
        image: '1.jpg',
        name: 'Paul Byrd',
        position: "Chief Financial Officer (CFO)",
        office: "New York",
        age: 64,
        startDate: "2010/06/09",
        salary: "$725,000",
    }, {
        id: 20,
        image: '2.jpg',
        name: 'Olivia Liang',
        position: "Support Engineer",
        office: "Singapore",
        age: 64,
        startDate: "2011/02/03",
        salary: "$234,500",
    }, {
        id: 21,
        image: '2.jpg',
        name: 'Michelle House',
        position: "Integration Specialist",
        office: "Sidney",
        age: 37,
        startDate: "2011/06/02",
        salary: "$95,400",
    }, {
        id: 22,
        image: '12.png',
        name: 'Michael Silva',
        position: "Marketing Designer",
        office: "London",
        age: 66,
        startDate: "2012/11/27",
        salary: "$198,500",
    }, {
        id: 23,
        image: '12.png',
        name: 'Michael Bruce',
        position: "Javascript Developer",
        office: "Singapore",
        age: 29,
        startDate: "2011/06/27",
        salary: "$183,000",
    }, {
        id: 24,
        image: '2.jpg',
        name: 'Martena Mccray',
        position: "Post-Sales support",
        office: "Edinburgh",
        age: 46,
        startDate: "2011/03/09",
        salary: "$324,050",
    }, {
        id: 25,
        image: '1.jpg',
        name: 'Lael Greer',
        position: "Systems Administrator",
        office: "London",
        age: 21,
        startDate: "2009/02/27",
        salary: "$103,500",
    }, {
        id: 26,
        image: '2.png',
        name: 'Jonas Alexander',
        position: "Developer",
        office: "San Francisco",
        age: 30,
        startDate: "2010/07/14",
        salary: "$86,500",
    }, {
        id: 27,
        image: '2.jpg',
        name: 'Jennifer Chang',
        position: "Regional Director",
        office: "Singapore",
        age: 28,
        startDate: "2010/11/14",
        salary: "$357,650",
    }, {
        id: 28,
        image: '2.png',
        name: 'Jennifer Acosta',
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: 43,
        startDate: "2013/02/01",
        salary: "$75,650",
    }, {
        id: 29,
        image: '2.jpg',
        name: 'Jenette Caldwell',
        position: "Development Lead",
        office: "New York",
        age: 30,
        startDate: "2011/09/03",
        salary: "$345,000",
    }, {
        id: 30,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Office Manager",
        office: "London",
        age: 30,
        startDate: "2008/12/19",
        salary: "$90,560",
    }, {
        id: 31,
        image: '1.jpg',
        name: 'Jackson Bradshaw',
        position: "Director",
        office: "New York",
        age: 65,
        startDate: "2008/09/26",
        salary: "$645,750",
    }, {
        id: 32,
        image: '1.jpg',
        name: 'Howard Hatfield',
        position: "Office Manager",
        office: "San Francisco",
        age: 51,
        startDate: "2008/12/16",
        salary: "$164,500",
    }, {
        id: 33,
        image: '2.png',
        name: 'Hope Fuentes',
        position: "Secretary",
        office: "San Francisco",
        age: 41,
        startDate: "2010/02/12",
        salary: "$109,850",
    }, {
        id: 34,
        image: '2.png',
        name: 'Herrod Chandler',
        position: "Sales Assistant",
        office: "San Francisco",
        age: 59,
        startDate: "2012/08/06",
        salary: "$137,500",
    }, {
        id: 35,
        image: '12.png',
        name: 'Hermione Butler',
        position: "Regional Director",
        office: "London",
        age: 47,
        startDate: "2011/03/21",
        salary: "$356,250",
    }, {
        id: 36,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Senior Marketing Designer",
        office: "London",
        age: 43,
        startDate: "2012/12/18",
        salary: "$313,500",
    }, {
        id: 37,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Systems Administrator",
        office: "New York",
        age: 59,
        startDate: "2009/04/10",
        salary: "$237,500",
    }, {
        id: 38,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Developer",
        office: "Edinburgh",
        age: 42,
        startDate: "2010/12/22",
        salary: "$92,575",
    }, {
        id: 39,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Team Leader",
        office: "San Francisco",
        age: 22,
        startDate: "2008/10/26",
        salary: "$235,500",
    }, {
        id: 40,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Accountant",
        office: "Tokyo",
        age: 63,
        startDate: "2011/07/25",
        salary: "$170,750",
    }, {
        id: 41,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: 48,
        startDate: "2010/03/11",
        salary: "$850,000",
    }, {
        id: 42,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Support Engineer",
        office: "San Francisco",
        age: 47,
        startDate: "2009/07/07",
        salary: "$87,500",
    }, {
        id: 43,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Sales Assistant",
        office: "Sidney",
        age: 23,
        startDate: "2010/09/20",
        salary: "$85,600",
    }, {
        id: 44,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Customer Support",
        office: "New York",
        age: 27,
        startDate: "2011/01/25",
        salary: "$112,000",
    }, {
        id: 45,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Personnel Lead",
        office: "Edinburgh",
        age: 35,
        startDate: "2012/09/26",
        salary: "$217,500",
    }, {
        id: 46,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Javascript Developer",
        office: "San Francisco",
        age: 39,
        startDate: "2009/09/15",
        salary: "$205,500",
    }, {
        id: 47,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Regional Director",
        office: "San Francisco",
        age: 36,
        startDate: "2008/10/16",
        salary: "$470,600",
    }, {
        id: 48,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: 22,
        startDate: "2012/03/29",
        salary: "$433,060",
    }, {
        id: 49,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Sales Assistant",
        office: "New York",
        age: 46,
        startDate: "2011/12/06",
        salary: "$145,600",
    }, {
        id: 50,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Pre-Sales Support",
        office: "New York",
        age: 21,
        startDate: "2011/12/12",
        salary: "$106,450",
    }, {
        id: 51,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Software Engineer",
        office: "London",
        age: 38,
        startDate: "2011/05/03",
        salary: "$163,500",
    }, {
        id: 52,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Integration Specialist",
        office: "New York",
        age: 61,
        startDate: "2012/12/02",
        salary: "$372,000",
    }, {
        id: 53,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Software Engineer",
        office: "San Francisco",
        age: 28,
        startDate: "2011/06/07",
        salary: "$206,850",
    }, {
        id: 54,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Software Engineer",
        office: "London",
        age: 41,
        startDate: "2012/10/13",
        salary: "$132,000",
    }, {
        id: 55,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Junior Technical Author",
        office: "San Francisco",
        age: 66,
        startDate: "2009/01/12",
        salary: "$86,000",
    }, {
        id: 56,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Chief Executive Officer (CEO)",
        office: "London",
        age: 47,
        startDate: "2009/10/09",
        salary: "$1,200,000",
    }, {
        id: 57,
        image: '2.jpg',
        name: 'Jena Gaines',
        position: "Accountant",
        office: "Tokyo",
        age: 33,
        startDate: "2008/11/28",
        salary: "$162,700",
    },
]

export const scrollVerticalDynamicHeightColumns: TableColumn<ScrollVerticalColumnsType>[] = [
    {
        name: "Name",
        selector: (row) => row["name"],
        sortable: true,
        cell: (row) => (
            <CustomNameImage src={row.image} name={row.name} />
        )
    },
    {
        name: "Position",
        selector: (row) => `${row.position}`,
        sortable: true,
    },
    {
        name: "Office",
        selector: (row) => `${row.office}`,
        sortable: true,
    },
    {
        name: "Age",
        selector: (row) => `${row.age}`,
        sortable: true,
    },
    {
        name: "Start Date",
        selector: (row) => row["startDate"],
        sortable: true,
    },
    {
        name: "Salary",
        selector: (row) => `${row.salary}`,
        sortable: true,
    },
    {
        name: "Action",
        sortable: true,
        cell: () => (
            <UL className="action simple-list flex-row">
                <LI className="edit"><a href={Href}><i className="icon-pencil-alt" /></a></LI>
                <LI className="delete"><a href={Href}><i className="icon-trash" /></a></LI>
            </UL>
        )
    },
];