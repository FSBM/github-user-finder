import { useState  } from "react";
import axios from "axios";

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

interface UseGitHubUserResult {
  users: GitHubUser[];
  loading: boolean;
  error: string | null;
  fetchUsers: (query: string, page?: number) => void;
}

const useGitHubUser = (): UseGitHubUserResult => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async (query: string, page: number = 1) => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/search/users`, {
        params: { q: query, page },
      });
      setUsers(response.data.items);
    } catch (err) {
      setError("Failed to fetch users. Try again later.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, error, fetchUsers };
};

export default useGitHubUser;