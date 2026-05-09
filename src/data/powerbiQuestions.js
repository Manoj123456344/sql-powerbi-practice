export const powerBIQuestionsData = [

{
  id: 1,
  question: "Difference between Measure and Calculated Column.",
  difficulty: "Easy",
  topic: "DAX",
  solution: "Measures calculate dynamically while calculated columns store values physically."
},
{
  id: 2,
  question: "Explain CALCULATE function.",
  difficulty: "Hard",
  topic: "DAX",
  solution: "CALCULATE changes filter context and evaluates expression."
},
{
  id: 3,
  question: "Difference between ALL and ALLSELECTED.",
  difficulty: "Hard",
  topic: "DAX",
  solution: "ALL removes filters completely while ALLSELECTED keeps external filters."
},
{
  id: 4,
  question: "What is FILTER function in DAX?",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Returns filtered table based on condition."
},
{
  id: 5,
  question: "Explain context transition in DAX.",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Row context converted into filter context using CALCULATE."
},
{
  id: 6,
  question: "Difference between SUM and SUMX.",
  difficulty: "Medium",
  topic: "DAX",
  solution: "SUMX iterates row by row while SUM directly aggregates column."
},
{
  id: 7,
  question: "What is row context?",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Current row being evaluated in calculation."
},
{
  id: 8,
  question: "What is filter context?",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Filters applied during measure calculation."
},
{
  id: 9,
  question: "Write DAX for running total.",
  difficulty: "Hard",
  topic: "Time Intelligence",
  solution: "Use CALCULATE with FILTER and ALL."
},
{
  id: 10,
  question: "Explain YTD calculation.",
  difficulty: "Medium",
  topic: "Time Intelligence",
  solution: "Use TOTALYTD function."
},
{
  id: 11,
  question: "Explain MTD calculation.",
  difficulty: "Medium",
  topic: "Time Intelligence",
  solution: "Use TOTALMTD function."
},
{
  id: 12,
  question: "Explain QTD calculation.",
  difficulty: "Medium",
  topic: "Time Intelligence",
  solution: "Use TOTALQTD function."
},
{
  id: 13,
  question: "What is SAMEPERIODLASTYEAR?",
  difficulty: "Medium",
  topic: "Time Intelligence",
  solution: "Returns same period from previous year."
},
{
  id: 14,
  question: "Difference between Import and DirectQuery.",
  difficulty: "Medium",
  topic: "Storage",
  solution: "Import stores data in memory while DirectQuery fetches live data."
},
{
  id: 15,
  question: "Limitations of DirectQuery.",
  difficulty: "Hard",
  topic: "Storage",
  solution: "Limited transformations slower performance and DAX restrictions."
},
{
  id: 16,
  question: "What is Composite Model?",
  difficulty: "Hard",
  topic: "Storage",
  solution: "Uses both Import and DirectQuery together."
},
{
  id: 17,
  question: "What is Star Schema?",
  difficulty: "Easy",
  topic: "Modeling",
  solution: "Fact table connected to dimension tables."
},
{
  id: 18,
  question: "Difference between Star and Snowflake schema.",
  difficulty: "Medium",
  topic: "Modeling",
  solution: "Star is denormalized while Snowflake is normalized."
},
{
  id: 19,
  question: "What is bidirectional relationship?",
  difficulty: "Medium",
  topic: "Relationships",
  solution: "Filters flow both directions between tables."
},
{
  id: 20,
  question: "Difference between active and inactive relationship.",
  difficulty: "Medium",
  topic: "Relationships",
  solution: "Only one active relationship allowed between same tables."
},

// QUERY WRITING QUESTIONS

{
  id: 21,
  question: "Write DAX measure for total sales.",
  difficulty: "Easy",
  topic: "DAX",
  solution: "Use SUM(Sales[Amount])."
},
{
  id: 22,
  question: "Write DAX for previous month sales.",
  difficulty: "Medium",
  topic: "Time Intelligence",
  solution: "Use CALCULATE with PREVIOUSMONTH."
},
{
  id: 23,
  question: "Write DAX for YoY growth percentage.",
  difficulty: "Hard",
  topic: "Time Intelligence",
  solution: "Use DIVIDE with current year and previous year sales."
},
{
  id: 24,
  question: "Write DAX for rank by sales.",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Use RANKX function."
},
{
  id: 25,
  question: "Write DAX to replace blank values with zero.",
  difficulty: "Easy",
  topic: "DAX",
  solution: "Use COALESCE or IF ISBLANK."
},
{
  id: 26,
  question: "Write DAX for distinct customer count.",
  difficulty: "Easy",
  topic: "DAX",
  solution: "Use DISTINCTCOUNT."
},
{
  id: 27,
  question: "Write DAX for cumulative sales.",
  difficulty: "Hard",
  topic: "Time Intelligence",
  solution: "Use CALCULATE with FILTER and ALL."
},
{
  id: 28,
  question: "Write DAX to calculate profit percentage.",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Use DIVIDE(profit,sales)."
},
{
  id: 29,
  question: "Write DAX for dynamic title.",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Use SELECTEDVALUE in measure."
},
{
  id: 30,
  question: "Write DAX for conditional formatting.",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Create measure returning color values or conditions."
},

// POWER QUERY

{
  id: 31,
  question: "What is Power Query?",
  difficulty: "Easy",
  topic: "Power Query",
  solution: "ETL layer used for data transformation."
},
{
  id: 32,
  question: "What is query folding?",
  difficulty: "Hard",
  topic: "Power Query",
  solution: "Transforms pushed back to source system."
},
{
  id: 33,
  question: "How to improve query folding?",
  difficulty: "Hard",
  topic: "Power Query",
  solution: "Use supported transformations early in steps."
},
{
  id: 34,
  question: "Difference between append and merge.",
  difficulty: "Easy",
  topic: "Power Query",
  solution: "Append combines rows merge combines columns."
},
{
  id: 35,
  question: "What is M language?",
  difficulty: "Medium",
  topic: "Power Query",
  solution: "Programming language used in Power Query."
},

// PERFORMANCE

{
  id: 36,
  question: "How to optimize Power BI report performance?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Reduce visuals optimize DAX and use star schema."
},
{
  id: 37,
  question: "What is incremental refresh?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Refreshes only recent partitions of data."
},
{
  id: 38,
  question: "What causes slow Power BI reports?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Complex DAX many visuals poor model design."
},
{
  id: 39,
  question: "How to reduce PBIX file size?",
  difficulty: "Medium",
  topic: "Performance",
  solution: "Remove unused columns reduce cardinality."
},
{
  id: 40,
  question: "What is VertiPaq engine?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "In-memory storage engine used by Power BI."
},

// REPORTS

{
  id: 41,
  question: "What are bookmarks?",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Save report state and navigation."
},
{
  id: 42,
  question: "What is drillthrough?",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Navigate to detailed report page."
},
{
  id: 43,
  question: "Difference between drilldown and drillthrough.",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Drilldown moves hierarchy levels while drillthrough opens another page."
},
{
  id: 44,
  question: "What are tooltips?",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Additional information shown on hover."
},
{
  id: 45,
  question: "How to create responsive mobile layout?",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Use mobile layout view in Power BI service."
},

// SECURITY

{
  id: 46,
  question: "What is Row Level Security?",
  difficulty: "Medium",
  topic: "Security",
  solution: "Restricts data access based on users."
},
{
  id: 47,
  question: "Difference between static and dynamic RLS.",
  difficulty: "Hard",
  topic: "Security",
  solution: "Dynamic RLS changes based on logged-in user."
},
{
  id: 48,
  question: "How to implement dynamic RLS?",
  difficulty: "Hard",
  topic: "Security",
  solution: "Use USERPRINCIPALNAME with mapping table."
},

// SERVICE

{
  id: 49,
  question: "What is Power BI Gateway?",
  difficulty: "Medium",
  topic: "Service",
  solution: "Connects cloud service to on-premises data."
},
{
  id: 50,
  question: "Difference between personal and enterprise gateway.",
  difficulty: "Medium",
  topic: "Service",
  solution: "Enterprise gateway supports multiple users and sources."
},

{
  id: 51,
  question: "What is dataflow in Power BI?",
  difficulty: "Medium",
  topic: "Dataflows",
  solution: "Reusable cloud ETL process."
},
{
  id: 52,
  question: "Difference between dataset and dataflow.",
  difficulty: "Medium",
  topic: "Architecture",
  solution: "Dataset stores model while dataflow stores transformed data."
},
{
  id: 53,
  question: "What is semantic model?",
  difficulty: "Medium",
  topic: "Modeling",
  solution: "Business-ready analytical data model."
},
{
  id: 54,
  question: "What are hierarchies in Power BI?",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Organized levels for drilldown analysis."
},
{
  id: 55,
  question: "Difference between slicer and filter.",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Slicer is visual filter for users."
},
{
  id: 56,
  question: "What is KPI visual?",
  difficulty: "Easy",
  topic: "Visuals",
  solution: "Shows target vs actual performance."
},
{
  id: 57,
  question: "How to handle many-to-many relationships?",
  difficulty: "Hard",
  topic: "Relationships",
  solution: "Use bridge tables carefully."
},
{
  id: 58,
  question: "What is USERELATIONSHIP function?",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Activates inactive relationship temporarily."
},
{
  id: 59,
  question: "Difference between calculated table and measure.",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Calculated table stores rows while measure calculates dynamically."
},
{
  id: 60,
  question: "What is RELATED function?",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Fetches value from related table."
},
{
  id: 61,
  question: "What is RELATEDTABLE function?",
  difficulty: "Medium",
  topic: "DAX",
  solution: "Returns related rows from another table."
},
{
  id: 62,
  question: "What is CROSSFILTER function?",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Changes filter direction in calculation."
},
{
  id: 63,
  question: "Explain CALCULATETABLE.",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Returns filtered table expression."
},
{
  id: 64,
  question: "What is EARLIER function?",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Accesses earlier row context."
},
{
  id: 65,
  question: "Difference between COUNT and COUNTROWS.",
  difficulty: "Easy",
  topic: "DAX",
  solution: "COUNT counts numeric values while COUNTROWS counts rows."
},
{
  id: 66,
  question: "What is DIVIDE function?",
  difficulty: "Easy",
  topic: "DAX",
  solution: "Safely performs division avoiding errors."
},
{
  id: 67,
  question: "How to create dynamic measure selection?",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Use disconnected table with SWITCH function."
},
{
  id: 68,
  question: "What is SWITCH function?",
  difficulty: "Easy",
  topic: "DAX",
  solution: "Alternative to nested IF statements."
},
{
  id: 69,
  question: "Difference between IF and SWITCH.",
  difficulty: "Easy",
  topic: "DAX",
  solution: "SWITCH is cleaner for multiple conditions."
},
{
  id: 70,
  question: "What is disconnected table?",
  difficulty: "Hard",
  topic: "Modeling",
  solution: "Table without relationships used for slicers or logic."
},
{
  id: 71,
  question: "How to create what-if parameter?",
  difficulty: "Medium",
  topic: "Modeling",
  solution: "Use What-if parameter feature in modeling."
},
{
  id: 72,
  question: "What are aggregations in Power BI?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Pre-summarized tables improving performance."
},
{
  id: 73,
  question: "What is cardinality in relationships?",
  difficulty: "Medium",
  topic: "Relationships",
  solution: "Defines uniqueness between columns."
},
{
  id: 74,
  question: "Difference between one-to-many and many-to-many.",
  difficulty: "Medium",
  topic: "Relationships",
  solution: "One-to-many has unique side while many-to-many does not."
},
{
  id: 75,
  question: "How to create date table?",
  difficulty: "Medium",
  topic: "Time Intelligence",
  solution: "Use CALENDAR or CALENDARAUTO functions."
},
{
  id: 76,
  question: "Why is date table important?",
  difficulty: "Medium",
  topic: "Time Intelligence",
  solution: "Required for accurate time intelligence calculations."
},
{
  id: 77,
  question: "Difference between calculated column and custom column.",
  difficulty: "Medium",
  topic: "Power Query",
  solution: "Calculated column uses DAX while custom column uses Power Query."
},
{
  id: 78,
  question: "How to remove duplicates in Power Query?",
  difficulty: "Easy",
  topic: "Power Query",
  solution: "Use Remove Duplicates option."
},
{
  id: 79,
  question: "How to pivot columns in Power Query?",
  difficulty: "Medium",
  topic: "Power Query",
  solution: "Use Pivot Column transformation."
},
{
  id: 80,
  question: "How to unpivot columns?",
  difficulty: "Medium",
  topic: "Power Query",
  solution: "Use Unpivot Columns transformation."
},
{
  id: 81,
  question: "What is custom visual?",
  difficulty: "Easy",
  topic: "Visuals",
  solution: "Third-party visual imported into Power BI."
},
{
  id: 82,
  question: "How to create tooltip page?",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Enable tooltip page in page settings."
},
{
  id: 83,
  question: "What are deployment pipelines?",
  difficulty: "Hard",
  topic: "Service",
  solution: "Manage deployment across development test and production."
},
{
  id: 84,
  question: "What is workspace in Power BI service?",
  difficulty: "Easy",
  topic: "Service",
  solution: "Collaborative area for reports and datasets."
},
{
  id: 85,
  question: "Difference between app workspace and My Workspace.",
  difficulty: "Easy",
  topic: "Service",
  solution: "App workspace supports collaboration."
},
{
  id: 86,
  question: "What are dashboards in Power BI?",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Single page collection of visuals."
},
{
  id: 87,
  question: "Difference between report and dashboard.",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Report has multiple pages while dashboard is single page."
},
{
  id: 88,
  question: "How to schedule refresh?",
  difficulty: "Medium",
  topic: "Service",
  solution: "Configure scheduled refresh in Power BI service."
},
{
  id: 89,
  question: "What is incremental refresh policy?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Defines partition refresh behavior."
},
{
  id: 90,
  question: "What is composite key in Power BI?",
  difficulty: "Medium",
  topic: "Modeling",
  solution: "Combination of multiple columns as key."
},
{
  id: 91,
  question: "How to handle slowly changing dimensions in Power BI?",
  difficulty: "Hard",
  topic: "Warehousing",
  solution: "Track historical records using effective dates."
},
{
  id: 92,
  question: "What are role-playing dimensions?",
  difficulty: "Hard",
  topic: "Modeling",
  solution: "Same dimension used multiple times."
},
{
  id: 93,
  question: "How to optimize DAX measures?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Avoid iterators reduce filter complexity."
},
{
  id: 94,
  question: "What is Performance Analyzer?",
  difficulty: "Medium",
  topic: "Performance",
  solution: "Tool to analyze report visual performance."
},
{
  id: 95,
  question: "What is DAX Studio?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "External tool for DAX query analysis."
},
{
  id: 96,
  question: "What is Tabular Editor?",
  difficulty: "Medium",
  topic: "Tools",
  solution: "External tool for semantic model editing."
},
{
  id: 97,
  question: "What is calculation group?",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Reusable calculation logic in semantic model."
},
{
  id: 98,
  question: "Difference between import refresh and incremental refresh.",
  difficulty: "Medium",
  topic: "Performance",
  solution: "Incremental refresh loads only changed partitions."
},
{
  id: 99,
  question: "How to create dynamic ranking?",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Use RANKX with slicer context."
},
{
  id: 100,
  question: "What is field parameter?",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Allows dynamic visual field switching."
},

{
  id: 101,
  question: "What is paginated report?",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Pixel perfect printable report."
},
{
  id: 102,
  question: "Difference between Import mode and Live connection.",
  difficulty: "Medium",
  topic: "Storage",
  solution: "Import stores data while Live connection queries source model."
},
{
  id: 103,
  question: "What is Analyze in Excel?",
  difficulty: "Easy",
  topic: "Service",
  solution: "Connect Power BI dataset with Excel pivot tables."
},
{
  id: 104,
  question: "What are perspectives in Power BI?",
  difficulty: "Medium",
  topic: "Modeling",
  solution: "Subset view of semantic model."
},
{
  id: 105,
  question: "What is calculation item?",
  difficulty: "Hard",
  topic: "DAX",
  solution: "Part of calculation groups for reusable calculations."
},
{
  id: 106,
  question: "What is XMLA endpoint?",
  difficulty: "Hard",
  topic: "Service",
  solution: "Endpoint for external tools and model access."
},
{
  id: 107,
  question: "Difference between star schema and flat table.",
  difficulty: "Medium",
  topic: "Modeling",
  solution: "Star schema improves performance and scalability."
},
{
  id: 108,
  question: "What is query reduction?",
  difficulty: "Medium",
  topic: "Performance",
  solution: "Reduces unnecessary visual queries."
},
{
  id: 109,
  question: "How to optimize slicer performance?",
  difficulty: "Medium",
  topic: "Performance",
  solution: "Reduce high cardinality and unnecessary visuals."
},
{
  id: 110,
  question: "What is automatic page refresh?",
  difficulty: "Medium",
  topic: "Service",
  solution: "Automatically refreshes visuals periodically."
},
{
  id: 111,
  question: "What is hybrid table?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Combines import and DirectQuery partitions."
},
{
  id: 112,
  question: "Difference between data model and semantic model.",
  difficulty: "Easy",
  topic: "Modeling",
  solution: "Semantic model is business-friendly analytical layer."
},
{
  id: 113,
  question: "What is object level security?",
  difficulty: "Hard",
  topic: "Security",
  solution: "Restricts access to tables and columns."
},
{
  id: 114,
  question: "What is sensitivity label?",
  difficulty: "Medium",
  topic: "Security",
  solution: "Protects sensitive organizational data."
},
{
  id: 115,
  question: "Difference between dashboard tile and report visual.",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Dashboard tiles are pinned visuals."
},
{
  id: 116,
  question: "How to create custom tooltip report page?",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Enable tooltip page type and assign to visuals."
},
{
  id: 117,
  question: "What is sync slicer?",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Synchronizes slicers across report pages."
},
{
  id: 118,
  question: "What is decomposition tree visual?",
  difficulty: "Medium",
  topic: "AI Visuals",
  solution: "AI visual for root cause analysis."
},
{
  id: 119,
  question: "What is key influencers visual?",
  difficulty: "Medium",
  topic: "AI Visuals",
  solution: "Identifies factors impacting metrics."
},
{
  id: 120,
  question: "How to create KPI cards?",
  difficulty: "Easy",
  topic: "Visuals",
  solution: "Use Card visual with measures."
},
{
  id: 121,
  question: "Difference between matrix and table visual.",
  difficulty: "Easy",
  topic: "Visuals",
  solution: "Matrix supports hierarchies and drilldown."
},
{
  id: 122,
  question: "What is conditional formatting?",
  difficulty: "Easy",
  topic: "Visuals",
  solution: "Dynamically formats visuals based on values."
},
{
  id: 123,
  question: "How to apply conditional formatting using DAX?",
  difficulty: "Medium",
  topic: "Visuals",
  solution: "Use measures returning colors or conditions."
},
{
  id: 124,
  question: "What is aggregation awareness?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Automatically uses aggregation tables for speed."
},
{
  id: 125,
  question: "What is data lineage?",
  difficulty: "Medium",
  topic: "Service",
  solution: "Tracks dependencies between Power BI assets."
},
{
  id: 126,
  question: "What is endorsement in Power BI?",
  difficulty: "Easy",
  topic: "Service",
  solution: "Promotes trusted datasets and reports."
},
{
  id: 127,
  question: "What are certified datasets?",
  difficulty: "Medium",
  topic: "Service",
  solution: "Officially approved trusted datasets."
},
{
  id: 128,
  question: "How to share reports securely?",
  difficulty: "Medium",
  topic: "Security",
  solution: "Use workspace roles and RLS."
},
{
  id: 129,
  question: "Difference between viewer and contributor role.",
  difficulty: "Easy",
  topic: "Service",
  solution: "Contributor can edit content while viewer cannot."
},
{
  id: 130,
  question: "What is deployment pipeline rule?",
  difficulty: "Hard",
  topic: "Service",
  solution: "Automates deployment configurations."
},
{
  id: 131,
  question: "What is Fabric in Microsoft ecosystem?",
  difficulty: "Medium",
  topic: "Fabric",
  solution: "Unified analytics platform from Microsoft."
},
{
  id: 132,
  question: "What is Lakehouse in Fabric?",
  difficulty: "Medium",
  topic: "Fabric",
  solution: "Combines data lake and warehouse capabilities."
},
{
  id: 133,
  question: "What is OneLake?",
  difficulty: "Medium",
  topic: "Fabric",
  solution: "Unified storage layer in Fabric."
},
{
  id: 134,
  question: "Difference between Power BI Pro and Premium.",
  difficulty: "Medium",
  topic: "Licensing",
  solution: "Premium offers dedicated capacity and advanced features."
},
{
  id: 135,
  question: "What is Premium Per User?",
  difficulty: "Medium",
  topic: "Licensing",
  solution: "Premium features for individual users."
},
{
  id: 136,
  question: "What is semantic link?",
  difficulty: "Hard",
  topic: "Fabric",
  solution: "Connects notebooks with semantic models."
},
{
  id: 137,
  question: "How to monitor refresh failures?",
  difficulty: "Medium",
  topic: "Service",
  solution: "Use refresh history and alerts."
},
{
  id: 138,
  question: "What is data mart in Power BI?",
  difficulty: "Medium",
  topic: "Architecture",
  solution: "Self-service relational analytics database."
},
{
  id: 139,
  question: "Difference between report level and page level filters.",
  difficulty: "Easy",
  topic: "Reports",
  solution: "Report filters apply globally while page filters apply per page."
},
{
  id: 140,
  question: "How to troubleshoot refresh issues?",
  difficulty: "Hard",
  topic: "Support",
  solution: "Check gateway credentials source access and logs."
},
{
  id: 141,
  question: "What are composite models on Power BI datasets?",
  difficulty: "Hard",
  topic: "Storage",
  solution: "Combine datasets with DirectQuery connections."
},
{
  id: 142,
  question: "What is report bursting?",
  difficulty: "Medium",
  topic: "Reports",
  solution: "Deliver filtered reports to specific users."
},
{
  id: 143,
  question: "How to implement audit logging in Power BI?",
  difficulty: "Hard",
  topic: "Security",
  solution: "Use Microsoft Purview and audit logs."
},
{
  id: 144,
  question: "What is natural language Q&A visual?",
  difficulty: "Easy",
  topic: "AI Visuals",
  solution: "Allows users to ask questions in plain English."
},
{
  id: 145,
  question: "How to reduce cardinality in Power BI?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Remove unnecessary unique columns."
},
{
  id: 146,
  question: "What is encoding in VertiPaq?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Compression technique for memory optimization."
},
{
  id: 147,
  question: "What are aggregatable dimensions?",
  difficulty: "Hard",
  topic: "Modeling",
  solution: "Dimensions optimized for aggregate queries."
},
{
  id: 148,
  question: "How to create role-playing date dimensions?",
  difficulty: "Hard",
  topic: "Modeling",
  solution: "Duplicate date table for multiple relationships."
},
{
  id: 149,
  question: "What is report subscription?",
  difficulty: "Easy",
  topic: "Service",
  solution: "Automatically emails report snapshots."
},
{
  id: 150,
  question: "How to handle large datasets in Power BI?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Use aggregations incremental refresh and star schema."
}
];