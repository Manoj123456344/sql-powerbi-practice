export const sqlQuestionsData = [

{
  id: 1,
  question: "Find the second highest salary from an employee table.",
  difficulty: "Medium",
  topic: "Subquery",
  solution: "Use MAX salary with nested subquery."
},
{
  id: 2,
  question: "Find duplicate records in a table.",
  difficulty: "Medium",
  topic: "Aggregation",
  solution: "Use GROUP BY with HAVING COUNT(*) > 1."
},
{
  id: 3,
  question: "Difference between WHERE and HAVING.",
  difficulty: "Easy",
  topic: "Filtering",
  solution: "WHERE filters rows before aggregation. HAVING filters after aggregation."
},
{
  id: 4,
  question: "Difference between DELETE, DROP and TRUNCATE.",
  difficulty: "Easy",
  topic: "Commands",
  solution: "DELETE removes rows, TRUNCATE removes all rows quickly, DROP removes object."
},
{
  id: 5,
  question: "Explain INNER JOIN with example.",
  difficulty: "Easy",
  topic: "Joins",
  solution: "Returns matching rows from both tables."
},
{
  id: 6,
  question: "Explain LEFT JOIN.",
  difficulty: "Easy",
  topic: "Joins",
  solution: "Returns all rows from left table and matching rows from right table."
},
{
  id: 7,
  question: "Explain RIGHT JOIN.",
  difficulty: "Easy",
  topic: "Joins",
  solution: "Returns all rows from right table and matching rows from left table."
},
{
  id: 8,
  question: "What is FULL OUTER JOIN?",
  difficulty: "Medium",
  topic: "Joins",
  solution: "Returns matching and nonmatching rows from both tables."
},
{
  id: 9,
  question: "Difference between UNION and UNION ALL.",
  difficulty: "Easy",
  topic: "Set Operators",
  solution: "UNION removes duplicates. UNION ALL keeps duplicates."
},
{
  id: 10,
  question: "Difference between CHAR and VARCHAR.",
  difficulty: "Easy",
  topic: "Datatypes",
  solution: "CHAR is fixed length. VARCHAR is variable length."
},
{
  id: 11,
  question: "What is a Primary Key?",
  difficulty: "Easy",
  topic: "Keys",
  solution: "Uniquely identifies each row."
},
{
  id: 12,
  question: "What is a Foreign Key?",
  difficulty: "Easy",
  topic: "Keys",
  solution: "Creates relationship between tables."
},
{
  id: 13,
  question: "Difference between Primary Key and Unique Key.",
  difficulty: "Easy",
  topic: "Keys",
  solution: "Primary key does not allow NULL. Unique key allows one NULL."
},
{
  id: 14,
  question: "Explain normalization.",
  difficulty: "Medium",
  topic: "Normalization",
  solution: "Reduces redundancy and improves data integrity."
},
{
  id: 15,
  question: "Explain 1NF.",
  difficulty: "Easy",
  topic: "Normalization",
  solution: "Eliminates repeating groups and multi-valued columns."
},
{
  id: 16,
  question: "Explain 2NF.",
  difficulty: "Medium",
  topic: "Normalization",
  solution: "Removes partial dependency."
},
{
  id: 17,
  question: "Explain 3NF.",
  difficulty: "Medium",
  topic: "Normalization",
  solution: "Removes transitive dependency."
},
{
  id: 18,
  question: "What is denormalization?",
  difficulty: "Medium",
  topic: "Normalization",
  solution: "Combines tables to improve read performance."
},
{
  id: 19,
  question: "What is a view?",
  difficulty: "Easy",
  topic: "Views",
  solution: "Virtual table created using SQL query."
},
{
  id: 20,
  question: "Difference between View and Table.",
  difficulty: "Easy",
  topic: "Views",
  solution: "Table stores data physically. View stores query logic."
},
{
  id: 21,
  question: "What is a stored procedure?",
  difficulty: "Medium",
  topic: "Procedures",
  solution: "Reusable block of SQL statements."
},
{
  id: 22,
  question: "What is a trigger?",
  difficulty: "Medium",
  topic: "Triggers",
  solution: "Automatically executes on insert, update or delete."
},
{
  id: 23,
  question: "What is a CTE?",
  difficulty: "Medium",
  topic: "CTE",
  solution: "Temporary named result set."
},
{
  id: 24,
  question: "Explain recursive CTE.",
  difficulty: "Hard",
  topic: "CTE",
  solution: "CTE that references itself recursively."
},
{
  id: 25,
  question: "Delete duplicate rows using CTE.",
  difficulty: "Medium",
  topic: "CTE",
  solution: "Use ROW_NUMBER inside CTE and delete duplicates."
},
{
  id: 26,
  question: "Difference between RANK and DENSE_RANK.",
  difficulty: "Medium",
  topic: "Window Functions",
  solution: "RANK skips values after ties. DENSE_RANK does not skip."
},
{
  id: 27,
  question: "Explain ROW_NUMBER.",
  difficulty: "Medium",
  topic: "Window Functions",
  solution: "Assigns sequential unique numbers to rows."
},
{
  id: 28,
  question: "What is indexing?",
  difficulty: "Medium",
  topic: "Indexes",
  solution: "Improves query performance by faster data access."
},
{
  id: 29,
  question: "Difference between clustered and non clustered index.",
  difficulty: "Medium",
  topic: "Indexes",
  solution: "Clustered changes physical order. Non clustered creates separate structure."
},
{
  id: 30,
  question: "What is transaction?",
  difficulty: "Medium",
  topic: "Transactions",
  solution: "Logical unit of work."
},
{
  id: 31,
  question: "Explain ACID properties.",
  difficulty: "Hard",
  topic: "Transactions",
  solution: "Atomicity, Consistency, Isolation and Durability."
},
{
  id: 32,
  question: "What is deadlock?",
  difficulty: "Hard",
  topic: "Transactions",
  solution: "Two processes waiting on each other indefinitely."
},
{
  id: 33,
  question: "Difference between OLTP and OLAP.",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "OLTP is transactional. OLAP is analytical."
},
{
  id: 34,
  question: "What is data warehouse?",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Central repository for analytics and reporting."
},
{
  id: 35,
  question: "Explain star schema.",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Fact table connected to multiple dimension tables."
},
{
  id: 36,
  question: "Explain snowflake schema.",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Normalized version of star schema."
},
{
  id: 37,
  question: "Difference between correlated and non correlated subquery.",
  difficulty: "Hard",
  topic: "Subquery",
  solution: "Correlated subquery executes once for each row."
},
{
  id: 38,
  question: "Difference between IN and EXISTS.",
  difficulty: "Medium",
  topic: "Subquery",
  solution: "EXISTS performs better for large datasets."
},
{
  id: 39,
  question: "What is CASE statement?",
  difficulty: "Easy",
  topic: "Conditional",
  solution: "Used for conditional logic in SQL."
},
{
  id: 40,
  question: "Explain GROUP BY.",
  difficulty: "Easy",
  topic: "Aggregation",
  solution: "Groups rows for aggregate calculations."
},
{
  id: 41,
  question: "What is schema in SQL?",
  difficulty: "Easy",
  topic: "Database",
  solution: "Logical structure of database objects."
},
{
  id: 42,
  question: "Difference between DELETE and TRUNCATE.",
  difficulty: "Easy",
  topic: "Commands",
  solution: "DELETE logs row removal. TRUNCATE removes all rows quickly."
},
{
  id: 43,
  question: "What is CROSS JOIN?",
  difficulty: "Easy",
  topic: "Joins",
  solution: "Returns Cartesian product of two tables."
},
{
  id: 44,
  question: "What is SELF JOIN?",
  difficulty: "Medium",
  topic: "Joins",
  solution: "Table joined with itself."
},
{
  id: 45,
  question: "How to find NULL values in SQL?",
  difficulty: "Easy",
  topic: "Filtering",
  solution: "Use IS NULL condition."
},
{
  id: 46,
  question: "Difference between COUNT(*) and COUNT(column).",
  difficulty: "Easy",
  topic: "Functions",
  solution: "COUNT(column) ignores NULL values."
},
{
  id: 47,
  question: "What are aggregate functions?",
  difficulty: "Easy",
  topic: "Functions",
  solution: "SUM AVG MIN MAX COUNT."
},
{
  id: 48,
  question: "Explain COALESCE function.",
  difficulty: "Medium",
  topic: "Functions",
  solution: "Returns first non-null value."
},
{
  id: 49,
  question: "Difference between ISNULL and COALESCE.",
  difficulty: "Medium",
  topic: "Functions",
  solution: "COALESCE supports multiple values and standard SQL."
},
{
  id: 50,
  question: "What is scalar function?",
  difficulty: "Medium",
  topic: "Functions",
  solution: "Returns single value."
},
{
  id: 51,
  question: "What is table valued function?",
  difficulty: "Medium",
  topic: "Functions",
  solution: "Returns table result."
},
{
  id: 52,
  question: "What is composite key?",
  difficulty: "Easy",
  topic: "Keys",
  solution: "Combination of multiple columns as key."
},
{
  id: 53,
  question: "What is candidate key?",
  difficulty: "Easy",
  topic: "Keys",
  solution: "Column eligible to become primary key."
},
{
  id: 54,
  question: "What is alternate key?",
  difficulty: "Easy",
  topic: "Keys",
  solution: "Candidate key not selected as primary key."
},
{
  id: 55,
  question: "Difference between SQL and NoSQL.",
  difficulty: "Medium",
  topic: "Database",
  solution: "SQL uses relational model. NoSQL supports flexible schemas."
},
{
  id: 56,
  question: "What is database partitioning?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Splitting large tables into smaller partitions."
},
{
  id: 57,
  question: "Explain query execution plan.",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Shows how SQL engine executes query."
},
{
  id: 58,
  question: "What is heap table?",
  difficulty: "Hard",
  topic: "Indexes",
  solution: "Table without clustered index."
},
{
  id: 59,
  question: "What causes slow SQL queries?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Missing indexes poor joins and large scans."
},
{
  id: 60,
  question: "How to optimize SQL query performance?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Use indexes proper joins and avoid SELECT *."
},
{
  id: 61,
  question: "Difference between UNION and JOIN.",
  difficulty: "Medium",
  topic: "Set Operators",
  solution: "UNION combines rows. JOIN combines columns."
},
{
  id: 62,
  question: "What is temp table?",
  difficulty: "Medium",
  topic: "Tables",
  solution: "Temporary table stored in tempdb."
},
{
  id: 63,
  question: "Difference between temp table and table variable.",
  difficulty: "Medium",
  topic: "Tables",
  solution: "Temp tables support indexes and statistics."
},
{
  id: 64,
  question: "What is surrogate key in warehouse?",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Artificial key used in dimension tables."
},
{
  id: 65,
  question: "Explain slowly changing dimensions.",
  difficulty: "Hard",
  topic: "Warehousing",
  solution: "Tracks historical data changes in dimensions."
},
{
  id: 66,
  question: "What is SCD Type 1?",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Overwrites old data."
},
{
  id: 67,
  question: "What is SCD Type 2?",
  difficulty: "Hard",
  topic: "Warehousing",
  solution: "Maintains historical records."
},
{
  id: 68,
  question: "What is SCD Type 3?",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Stores limited history in extra columns."
},
{
  id: 69,
  question: "Difference between OLTP and Data Warehouse.",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "OLTP handles transactions. Warehouse handles analytics."
},
{
  id: 70,
  question: "What is factless fact table?",
  difficulty: "Hard",
  topic: "Warehousing",
  solution: "Fact table without measures."
},
{
  id: 71,
  question: "What is grain in fact table?",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Level of detail stored in fact table."
},
{
  id: 72,
  question: "Difference between star and snowflake schema.",
  difficulty: "Medium",
  topic: "Warehousing",
  solution: "Star is denormalized. Snowflake is normalized."
},
{
  id: 73,
  question: "How to identify duplicate rows using ROW_NUMBER?",
  difficulty: "Medium",
  topic: "Window Functions",
  solution: "Partition by duplicate columns and filter row_number > 1."
},
{
  id: 74,
  question: "Explain LEAD function.",
  difficulty: "Hard",
  topic: "Window Functions",
  solution: "Accesses next row value."
},
{
  id: 75,
  question: "Explain LAG function.",
  difficulty: "Hard",
  topic: "Window Functions",
  solution: "Accesses previous row value."
},
{
  id: 76,
  question: "What is NTILE function?",
  difficulty: "Hard",
  topic: "Window Functions",
  solution: "Divides rows into groups."
},
{
  id: 77,
  question: "What is PIVOT in SQL?",
  difficulty: "Medium",
  topic: "Transformation",
  solution: "Converts rows into columns."
},
{
  id: 78,
  question: "What is UNPIVOT?",
  difficulty: "Medium",
  topic: "Transformation",
  solution: "Converts columns into rows."
},
{
  id: 79,
  question: "Difference between VARCHAR and NVARCHAR.",
  difficulty: "Easy",
  topic: "Datatypes",
  solution: "NVARCHAR supports Unicode characters."
},
{
  id: 80,
  question: "What is database cursor?",
  difficulty: "Medium",
  topic: "Cursor",
  solution: "Processes rows one by one."
},
{
  id: 81,
  question: "Why should cursors be avoided?",
  difficulty: "Medium",
  topic: "Cursor",
  solution: "They are slower than set based operations."
},
{
  id: 82,
  question: "What is dynamic SQL?",
  difficulty: "Medium",
  topic: "Dynamic SQL",
  solution: "SQL statements generated at runtime."
},
{
  id: 83,
  question: "Difference between clustered index scan and seek.",
  difficulty: "Hard",
  topic: "Indexes",
  solution: "Seek is faster and uses index efficiently."
},
{
  id: 84,
  question: "How to avoid deadlocks?",
  difficulty: "Hard",
  topic: "Transactions",
  solution: "Maintain consistent locking order and short transactions."
},
{
  id: 85,
  question: "What is normalization anomaly?",
  difficulty: "Medium",
  topic: "Normalization",
  solution: "Insert update and delete anomalies."
},
{
  id: 86,
  question: "What is execution plan cache?",
  difficulty: "Hard",
  topic: "Performance",
  solution: "Stores compiled query plans."
},
{
  id: 87,
  question: "What is indexing fragmentation?",
  difficulty: "Hard",
  topic: "Indexes",
  solution: "Logical disorder in index pages."
},
{
  id: 88,
  question: "What is database backup?",
  difficulty: "Easy",
  topic: "Backup",
  solution: "Copy of database for recovery purposes."
},
{
  id: 89,
  question: "Difference between full and differential backup.",
  difficulty: "Medium",
  topic: "Backup",
  solution: "Differential stores changes since full backup."
},
{
  id: 90,
  question: "What is log shipping?",
  difficulty: "Hard",
  topic: "Recovery",
  solution: "Automatically transfers transaction logs to standby server."
},
{
  id: 91,
  question: "What is replication in SQL Server?",
  difficulty: "Hard",
  topic: "Replication",
  solution: "Copies and distributes data across databases."
},
{
  id: 92,
  question: "What is CDC in SQL?",
  difficulty: "Hard",
  topic: "ETL",
  solution: "Captures changed data from tables."
},
{
  id: 93,
  question: "What is ETL process?",
  difficulty: "Medium",
  topic: "ETL",
  solution: "Extract Transform Load process."
},
{
  id: 94,
  question: "Difference between ETL and ELT.",
  difficulty: "Medium",
  topic: "ETL",
  solution: "ELT loads before transformation."
},
{
  id: 95,
  question: "What is cardinality in SQL?",
  difficulty: "Medium",
  topic: "Relationships",
  solution: "Defines relationship uniqueness between tables."
},
{
  id: 96,
  question: "What is one to many relationship?",
  difficulty: "Easy",
  topic: "Relationships",
  solution: "One row linked to multiple rows."
},
{
  id: 97,
  question: "What is many to many relationship?",
  difficulty: "Medium",
  topic: "Relationships",
  solution: "Multiple rows linked to multiple rows."
},
{
  id: 98,
  question: "What is SQL injection?",
  difficulty: "Hard",
  topic: "Security",
  solution: "Malicious SQL code injection attack."
},
{
  id: 99,
  question: "How to prevent SQL injection?",
  difficulty: "Hard",
  topic: "Security",
  solution: "Use parameterized queries and validations."
},
{
  id: 100,
  question: "What is database collation?",
  difficulty: "Medium",
  topic: "Database",
  solution: "Defines sorting and comparison rules for characters."
},
{
  id: 101,
  question: "Write SQL query to find top 3 salaries from employee table.",
  difficulty: "Medium",
  topic: "Query Writing",
  solution: "Use ORDER BY salary DESC with TOP or LIMIT."
},
{
  id: 102,
  question: "Write query to find employees whose salary is greater than average salary.",
  difficulty: "Medium",
  topic: "Subquery",
  solution: "Use subquery with AVG function."
},
{
  id: 103,
  question: "Write query to remove duplicate rows using ROW_NUMBER.",
  difficulty: "Hard",
  topic: "Window Functions",
  solution: "Use CTE with ROW_NUMBER and delete rows where row number > 1."
},
{
  id: 104,
  question: "Write query to get highest salary department wise.",
  difficulty: "Hard",
  topic: "Aggregation",
  solution: "Use GROUP BY with MAX or DENSE_RANK."
},
{
  id: 105,
  question: "Write query to swap two column values.",
  difficulty: "Medium",
  topic: "Query Writing",
  solution: "Use UPDATE with CASE statement."
},
{
  id: 106,
  question: "Write query to display even numbered rows.",
  difficulty: "Medium",
  topic: "Filtering",
  solution: "Use MOD operator or ROW_NUMBER."
},
{
  id: 107,
  question: "Write query to display odd numbered rows.",
  difficulty: "Medium",
  topic: "Filtering",
  solution: "Use MOD operator or ROW_NUMBER."
},
{
  id: 108,
  question: "Write query to find duplicate emails from users table.",
  difficulty: "Medium",
  topic: "Aggregation",
  solution: "Use GROUP BY email HAVING COUNT(*) > 1."
},
{
  id: 109,
  question: "Write query to calculate running total.",
  difficulty: "Hard",
  topic: "Window Functions",
  solution: "Use SUM OVER ORDER BY."
},
{
  id: 110,
  question: "Write query to fetch first and last record from table.",
  difficulty: "Medium",
  topic: "Query Writing",
  solution: "Use TOP 1 with ascending and descending order."
},
{
  id: 111,
  question: "Write query to find employees joined in last 30 days.",
  difficulty: "Medium",
  topic: "Date Functions",
  solution: "Use DATEDIFF or CURRENT_DATE logic."
},
{
  id: 112,
  question: "Write query to count employees department wise.",
  difficulty: "Easy",
  topic: "Aggregation",
  solution: "Use GROUP BY department."
},
{
  id: 113,
  question: "Write query to fetch common records from two tables.",
  difficulty: "Medium",
  topic: "Joins",
  solution: "Use INNER JOIN or INTERSECT."
},
{
  id: 114,
  question: "Write query to fetch unmatched records from two tables.",
  difficulty: "Medium",
  topic: "Joins",
  solution: "Use LEFT JOIN with NULL filter."
},
{
  id: 115,
  question: "Write query to find third highest salary.",
  difficulty: "Hard",
  topic: "Subquery",
  solution: "Use DENSE_RANK or nested subquery."
},
{
  id: 116,
  question: "Write query to find employees with same salary.",
  difficulty: "Medium",
  topic: "Aggregation",
  solution: "Use GROUP BY salary HAVING COUNT(*) > 1."
},
{
  id: 117,
  question: "Write query to fetch alternate records.",
  difficulty: "Medium",
  topic: "Filtering",
  solution: "Use ROW_NUMBER with MOD function."
},
{
  id: 118,
  question: "Write query to find maximum salary in each department.",
  difficulty: "Medium",
  topic: "Aggregation",
  solution: "Use GROUP BY department with MAX salary."
},
{
  id: 119,
  question: "Write query to display employee count by city.",
  difficulty: "Easy",
  topic: "Aggregation",
  solution: "Use GROUP BY city."
},
{
  id: 120,
  question: "Write query to update NULL values.",
  difficulty: "Medium",
  topic: "Commands",
  solution: "Use UPDATE with IS NULL condition."
},
{
  id: 121,
  question: "Write query to find employees without manager.",
  difficulty: "Medium",
  topic: "Filtering",
  solution: "Use WHERE manager_id IS NULL."
},
{
  id: 122,
  question: "Write query to find duplicate names.",
  difficulty: "Easy",
  topic: "Aggregation",
  solution: "Use GROUP BY name HAVING COUNT(*) > 1."
},
{
  id: 123,
  question: "Write query to display current date.",
  difficulty: "Easy",
  topic: "Date Functions",
  solution: "Use GETDATE or CURRENT_DATE."
},
{
  id: 124,
  question: "Write query to extract month from date.",
  difficulty: "Easy",
  topic: "Date Functions",
  solution: "Use MONTH function."
},
{
  id: 125,
  question: "Write query to extract year from date.",
  difficulty: "Easy",
  topic: "Date Functions",
  solution: "Use YEAR function."
},
{
  id: 126,
  question: "Write query to calculate age from DOB.",
  difficulty: "Medium",
  topic: "Date Functions",
  solution: "Use DATEDIFF between DOB and current date."
},
{
  id: 127,
  question: "Write query to display top selling products.",
  difficulty: "Hard",
  topic: "Scenario Based",
  solution: "Use GROUP BY with SUM sales and ORDER BY DESC."
},
{
  id: 128,
  question: "Write query to fetch employees hired this year.",
  difficulty: "Medium",
  topic: "Date Functions",
  solution: "Filter using YEAR(join_date)."
},
{
  id: 129,
  question: "Write query to replace NULL values with default value.",
  difficulty: "Medium",
  topic: "Functions",
  solution: "Use ISNULL or COALESCE."
},
{
  id: 130,
  question: "Write query to concatenate first and last names.",
  difficulty: "Easy",
  topic: "String Functions",
  solution: "Use CONCAT function."
},
{
  id: 131,
  question: "Write query to find length of a string.",
  difficulty: "Easy",
  topic: "String Functions",
  solution: "Use LEN or LENGTH function."
},
{
  id: 132,
  question: "Write query to convert lowercase to uppercase.",
  difficulty: "Easy",
  topic: "String Functions",
  solution: "Use UPPER function."
},
{
  id: 133,
  question: "Write query to remove spaces from string.",
  difficulty: "Easy",
  topic: "String Functions",
  solution: "Use TRIM function."
},
{
  id: 134,
  question: "Write query to display first 5 characters.",
  difficulty: "Easy",
  topic: "String Functions",
  solution: "Use SUBSTRING function."
},
{
  id: 135,
  question: "Write query to display records between two dates.",
  difficulty: "Medium",
  topic: "Date Functions",
  solution: "Use BETWEEN condition."
},
{
  id: 136,
  question: "Write query to find highest salary employee.",
  difficulty: "Easy",
  topic: "Subquery",
  solution: "Use MAX salary subquery."
},
{
  id: 137,
  question: "Write query to calculate monthly sales.",
  difficulty: "Medium",
  topic: "Aggregation",
  solution: "Use GROUP BY month with SUM sales."
},
{
  id: 138,
  question: "Write query to fetch last inserted record.",
  difficulty: "Medium",
  topic: "Query Writing",
  solution: "Use TOP 1 ORDER BY id DESC."
},
{
  id: 139,
  question: "Write query to delete duplicate records.",
  difficulty: "Hard",
  topic: "CTE",
  solution: "Use ROW_NUMBER with DELETE."
},
{
  id: 140,
  question: "Write query to identify missing IDs.",
  difficulty: "Hard",
  topic: "Scenario Based",
  solution: "Use self join or recursive query."
},
{
  id: 141,
  question: "Write query to rank employees by salary.",
  difficulty: "Medium",
  topic: "Window Functions",
  solution: "Use RANK or DENSE_RANK."
},
{
  id: 142,
  question: "Write query to calculate cumulative sales.",
  difficulty: "Hard",
  topic: "Window Functions",
  solution: "Use SUM OVER ORDER BY."
},
{
  id: 143,
  question: "Write query to fetch latest order per customer.",
  difficulty: "Hard",
  topic: "Scenario Based",
  solution: "Use ROW_NUMBER partitioned by customer."
},
{
  id: 144,
  question: "Write query to display employees earning above department average.",
  difficulty: "Hard",
  topic: "Subquery",
  solution: "Use correlated subquery with AVG salary."
},
{
  id: 145,
  question: "Write query to identify duplicate phone numbers.",
  difficulty: "Medium",
  topic: "Aggregation",
  solution: "Use GROUP BY phone HAVING COUNT(*) > 1."
},
{
  id: 146,
  question: "Write query to pivot monthly sales data.",
  difficulty: "Hard",
  topic: "Transformation",
  solution: "Use PIVOT operator."
},
{
  id: 147,
  question: "Write query to unpivot columns into rows.",
  difficulty: "Hard",
  topic: "Transformation",
  solution: "Use UNPIVOT operator."
},
{
  id: 148,
  question: "Write query to generate row numbers.",
  difficulty: "Medium",
  topic: "Window Functions",
  solution: "Use ROW_NUMBER OVER clause."
},
{
  id: 149,
  question: "Write query to calculate moving average.",
  difficulty: "Hard",
  topic: "Window Functions",
  solution: "Use AVG OVER with window frame."
},
{
  id: 150,
  question: "Write query to find customers with no orders.",
  difficulty: "Medium",
  topic: "Joins",
  solution: "Use LEFT JOIN and filter NULL orders."
}
];