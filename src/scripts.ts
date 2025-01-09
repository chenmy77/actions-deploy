// export async function fetchAndCountIssues(apiUrl: string, elementId: string) {
//     const token = process.env.GITHUB_TOKEN || '';
    
//     try {
//       const response = await fetch(apiUrl, {
//         headers: {
//           Authorization: `token ${token}`,
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
  
//       const issues = await response.json();
//       const issueCount = issues.length;
  
//       // Update HTML element with the issue count
//       const element = document.getElementById(elementId);
//       if (element) {
//         element.textContent = issueCount.toString();
//       }
//     } catch (error) {
//       console.error('Error fetching issues:', error);
//       const element = document.getElementById(elementId);
//       if (element) {
//         element.textContent = 'Error';
//       }
//     }
//   }
  
//   // Compile this TypeScript into scripts.js using `tsc`
async function fetchAndCountIssues(apiUrl:string , elementId:string) {
    const token = 'your_token_here';  // Manually set token or get it from a secure source
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const issues = await response.json();
      const issueCount = issues.length;
  
      // Update HTML element with the issue count
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = issueCount.toString();
      }
    } catch (error) {
      console.error('Error fetching issues:', error);
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = 'Error';
      }
    }
  }
  